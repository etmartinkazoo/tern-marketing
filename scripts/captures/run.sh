#!/bin/bash
# usage: run.sh <theme> ; starts tern --demo in tmux session cap
S=$(dirname "$(readlink -f "$0")")
tmux kill-session -t cap 2>/dev/null
rm -rf $S/xdg
tmux new-session -d -s cap -x ${COLS:-150} -y ${ROWS:-40} "TERN_THEME_DIR=$S/themes/$1 XDG_DATA_HOME=$S/xdg/share XDG_CACHE_HOME=$S/xdg/cache XDG_CONFIG_HOME=$S/xdg/config ${TERN_BIN:-tern} --demo"
sleep 2.5
