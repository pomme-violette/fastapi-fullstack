import os
from dotenv import load_dotenv

load_dotenv(verbose=True, dotenv_path='.env')

DEBUG = os.environ.get('DEBUG')
DOCS_URL = os.environ.get('DOCS_URL')
REDOC_URL = os.environ.get('REDOC_URL')
OPENAPI_URL = os.environ.get('OPENAPI_URL')
X_LOGO_URL = os.environ.get('X_LOGO_URL')
SYS_APPNAME  = os.environ.get("SYS_APPNAME")
SYS_VERSION  = os.environ.get("SYS_VERSION")
SYS_DESCRIPTION = os.environ.get("SYS_DESCRIPTION")

SLACK_CLIENT_ID = os.environ.get("SLACK_CLIENT_ID")
SLACK_CLIENT_SECRET = os.environ.get("SLACK_CLIENT_SECRET")