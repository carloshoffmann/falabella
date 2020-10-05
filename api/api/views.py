# from django.shortcuts import render
from django.http import HttpResponse
from .functions import calcPiWrapper
import requests
import random
from django.conf import settings

def search(request):
 
   search_string = request.GET.get('search', '')
   page = request.GET.get('page', 1)
   url = '{0}/{1}/search/{2}'.format(settings.SHAPI_BASE_URL, settings.SHAPI_TOKEN, search_string)
   r = requests.get(url)
   results = r.text

   return HttpResponse(results, content_type="application/json")

def pi(request): 

   out = { "PiCalc": ""}

   try:
      random_limit = int(request.GET.get("random_limit", 0))
   except ValueError:
      out["status"] = "ERROR"
      out["msg"] = "random_limit debe ser NUMÉRICO"
      return HttpResponse(json.dumps(out), content_type="application/json")

   lower_limit = random_limit / 2
   r = random.randint(lower_limit, random_limit)
   out["PiCalc"] = calcPiWrapper(r)

   return HttpResponse(json.dumps(out), content_type="application/json")


