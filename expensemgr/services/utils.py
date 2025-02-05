from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext

from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated='auto')
oath2_bearer = OAuth2PasswordBearer(tokenUrl='auth/token')
