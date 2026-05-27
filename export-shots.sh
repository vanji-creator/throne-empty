#!/usr/bin/env bash
# Export every gallery card to a high-res PNG via headless Chrome.
# Builds the app, serves dist/, then screenshots each /#/shot/<id> route at 2x.
set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME:-google-chrome}"
PORT="${PORT:-8765}"
SCALE="${SCALE:-2}"
OUT="exports"

# id  filename  W  H
CARDS=(
  "np         np.png                 1080 1350"
  "library    library.png            1080 1350"
  "search     search.png             1080 1350"
  "queue      queue.png              1080 1350"
  "home       home.png               1080 1350"
  "landscape  landscape.png          1350 1080"
  "s1         slide-1-cover.png      1080 1350"
  "s2         slide-2-thesis.png     1080 1350"
  "s3         slide-3-nowplaying.png 1080 1350"
  "s4         slide-4-triptych.png   1080 1350"
  "s5         slide-5-home.png       1080 1350"
  "s6         slide-6-cta.png        1080 1350"
  "og         og-card.png            1200  630"
)

echo "Building…"
npm run build >/tmp/te-build.log 2>&1 || { echo "build failed"; tail -20 /tmp/te-build.log; exit 1; }
mkdir -p "$OUT"

python3 -m http.server "$PORT" --directory dist >/tmp/te-export-srv.log 2>&1 &
SRV=$!
trap 'kill "$SRV" 2>/dev/null || true' EXIT
sleep 1.2

echo "Exporting ${#CARDS[@]} cards to $OUT/ at ${SCALE}x …"
printf '%-26s %-12s %s\n' "FILE" "CSS px" "OUTPUT px"
for row in "${CARDS[@]}"; do
  read -r id file w h <<<"$row"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --force-device-scale-factor="$SCALE" --virtual-time-budget=3500 \
    --window-size="${w},${h}" --screenshot="$OUT/$file" \
    "http://localhost:$PORT/#/shot/$id" >/dev/null 2>&1
  printf '%-26s %-12s %s\n' "$file" "${w}x${h}" "$((w*SCALE))x$((h*SCALE))"
done

echo
echo "Done → $(pwd)/$OUT/"
ls -la "$OUT"/*.png | awk '{printf "  %8d  %s\n", $5, $NF}'
