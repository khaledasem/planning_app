import frappe
import requests
import urllib
import ftplib

from email import encoders
import shutil
import urllib.request as request
from contextlib import closing

@frappe.whitelist()
def get_qr_file():
        # frappe.local.response.filename = "qrcode.txt"
        # frappe.local.response.filecontent = read_file_content('/private/files/qrcode.txt') # custom function
        # frappe.local.response.type = "download"

        return 'r'
# def download_file():
#         ftp = ftplib.FTP("127.0.0.1")
#         ftp.login("frappe", "khaled135")
#         ftp.retrlines("LIST")
#         return 'r'