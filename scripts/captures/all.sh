#!/bin/bash
S=$(dirname "$(readlink -f "$0")"); cd $S
cap(){ mkdir -p out/$1; tmux capture-pane -ept cap > out/$1/$2.txt; }
for t in tokyo-night catppuccin gruvbox nord everforest kanagawa rose-pine; do
  ./run.sh $t; sleep 1; cap $t mail
  tmux send-keys -t cap C; sleep 1.2; tmux send-keys -t cap j j j; sleep 0.6; cap $t calendar
  tmux send-keys -t cap a; sleep 0.4; tmux send-keys -t cap -l "Lunch with Maya fri 12:30 1h @Osteria"; sleep 0.6; cap $t quickadd
  ./run.sh $t; tmux send-keys -t cap P; sleep 1; tmux send-keys -t cap j j j j; sleep 0.6; cap $t people
  ./run.sh $t; sleep 1; tmux send-keys -t cap r; sleep 1; tmux send-keys -t cap -l "Sounds right. Billing waits; I'll sign off on dropping the beta."; sleep 0.6; cap $t compose
  ./run.sh $t; sleep 1; tmux send-keys -t cap j; sleep 1; tmux send-keys -t cap b; sleep 0.6; cap $t snooze
  ./run.sh $t; sleep 1; tmux send-keys -t cap '?'; sleep 0.8; cap $t keys
done
tmux kill-session -t cap
