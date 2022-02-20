from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in planning_app/__init__.py
from planning_app import __version__ as version

setup(
	name="planning_app",
	version=version,
	description="planning app",
	author="khaled asem",
	author_email="khaled.asem@yemenmobile.com.ye",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
