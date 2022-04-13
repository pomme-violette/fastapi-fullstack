from fastapi import Cookie
from fastapi import APIRouter
from fastapi import Response
from fastapi.responses import JSONResponse
from fastapi.responses import RedirectResponse
from fastapi import HTTPException
import settings

router = APIRouter()


@router.get('/', response_class=JSONResponse)
async def render_model():
    return {'status': "OK"}
