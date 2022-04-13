from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi
import uvicorn
from endpoints import endpoints
import settings

app = FastAPI(debug=True,
              docs_url=settings.DOCS_URL,
              redoc_url=settings.REDOC_URL,
              openapi_url=settings.OPENAPI_URL)
app.include_router(endpoints.router, tags=["Endpoints"], dependencies=0)

origins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:3000",
    "https://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openapi_schema = get_openapi(
    routes=app.routes,
    title=settings.SYS_APPNAME,
    version=settings.SYS_VERSION,
    description=settings.SYS_DESCRIPTION,
)
openapi_schema["info"]["x-logo"] = {
    "url": settings.X_LOGO_URL,
}
app.openapi_schema = openapi_schema


if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=5000,
                reload=True, access_log=True)
