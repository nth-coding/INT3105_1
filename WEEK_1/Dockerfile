FROM ubuntu:latest

# Đặt biến môi trường USER
ENV USER=root

# Cập nhật các gói phần mềm và cài đặt xfce4, xfce4-goodies, và tightvncserver
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y xfce4 xfce4-goodies tightvncserver nano && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Tạo file xstartup mới
RUN mkdir ~/.vnc && \
    echo "#!/bin/bash\nxrdb $HOME/.Xresources\nstartxfce4 &" > ~/.vnc/xstartup && \
    chmod +x ~/.vnc/xstartup

# Tạo mật khẩu cho VNC
RUN echo "Hai242003@" | vncpasswd -f > ~/.vnc/passwd && \
    chmod 600 ~/.vnc/passwd

# Expose cổng 5901 để kết nối VNC
EXPOSE 5901

CMD ["/bin/bash"]


# Các lệnh VNC được chạy thủ công