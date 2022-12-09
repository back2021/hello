import tempfile
import tkinter as tk
import os


class MainView(tk.Frame):
    def __init__(self, *args, **kwargs):

        def print_area():
            txt = "프린트할 내용을 넣어주세요!"
            temp_file = tempfile.mktemp(".txt")
            open(temp_file, "w").write(txt)
            os.startfile(temp_file, "print")
# 파이썬으로 프린트하기
# 위 함수 잘 이용하면됨
# txt라는 변수에 프린트할 내용을 넣어줌
# temp_file 이라는 변수를 .txt로 만들고(?)
# 그걸열어서 txt를 안에다 써넣고 그 파일에 프린트기능을 실행시키라는 내용?
# 유튜브에서 본거라 이상한거일수도 있음ㅋㅋ