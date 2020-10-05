
# Python Projects: Compute the value of Pi to n number of decimal places
# https://www.w3resource.com/projects/python/python-projects-1.php

def calcPi(limit):  # Generator function

   """
   Prints out the digits of PI
   until it reaches the given limit
   """
   
   try:
      decimal = int(limit)
   except ValueError:
      return "ERROR: limit debe ser número"

   q, r, t, k, n, l = 1, 0, 1, 1, 3, 3
   counter = 0

   while counter != decimal + 1:
      if 4 * q + r - t < n * t:
         # yield digit
         yield n
         # insert period after first digit
         if counter == 0:
            yield '.'
         # end
         if decimal == counter:
            print('')
            break
         counter += 1
         nr = 10 * (r - n * t)
         n = ((10 * (3 * q + r)) // t) - 10 * n
         q *= 10
         r = nr
      else:
         nr = (2 * q + r) * l
         nn = (q * (7 * k) + 2 + (r * l)) // (t * l)
         q *= k
         t *= l
         l += 2
         k += 1
         n = nn
         r = nr

def calcPiWrapper(limit): 
   
   out = ''
   pi_digits = calcPi(limit)

   for d in pi_digits:
      out += str(d)
   
   return out
     
