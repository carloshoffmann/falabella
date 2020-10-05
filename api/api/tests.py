from django.test import TestCase
from .functions import calcPi, calcPiWrapper
import types

class PiTestCase(TestCase):

   def setUp(self):
      return

   def test_calcPi(self):
      """possible inputs and expected answers for f test case assert Equal.unction calcPi"""
      self.assertEqual(calcPiWrapper("TEXTO"), "")
      self.assertEqual(calcPiWrapper(-1), "")
      self.assertEqual(calcPiWrapper(0), "3.")
      self.assertEqual(calcPiWrapper(1), "3.1")
      self.assertEqual(calcPiWrapper(2), "3.14")
      #from requirements
      self.assertEqual(calcPiWrapper(5), "3.14159")
      self.assertEqual(calcPiWrapper(9), "3.141592653")
      self.assertEqual(calcPiWrapper(10), "3.1415926535")

      
      