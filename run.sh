docker run -u=$(id -u $USER):$(id -g $USER) -e DISPLAY=$DISPLAY -v /tmp/.X11-unix/:/tmp/.X11-unix/:rw -v $(pwd)/app:/app -v $(pwd)/Compliance:/$USER/Compliance -it tkinter_in_docker
