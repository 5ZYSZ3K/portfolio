#include <IRremote.h>
#include <Servo.h>

int Ired=13;
IRrecv DiodIR(Ired);
decode_results(Dane);

int a1=0;
int a2=0;
int b1=0;
int b2=0;

Servo Ms;
int Spin=6;
int p = 102;

// Silnik A
int input1APin = 5;
int input2APin = 3;
int predkoscA;

// Silnik B
int input1BPin = 9;
int input2BPin = 10;
int predkoscB;

void ustawMotor(int in1Pin, int in2Pin, int pred, int pred2) 
{
  analogWrite(in1Pin, pred);
  analogWrite(in2Pin, pred2);
}

void setup()
{
  pinMode(input1APin, OUTPUT);
  pinMode(input2APin, OUTPUT);

  pinMode(input1BPin, OUTPUT);
  pinMode(input2BPin, OUTPUT);
  pinMode(Spin, OUTPUT);

  Serial.begin(9600);
  DiodIR.enableIRIn();

  Ms.attach(Spin);
}

void loop()
{
  if(DiodIR.decode(&Dane))
  {
    Serial.println(Dane.value);
    if (Dane.value == 2105 || Dane.value == 57){
      if (a1 < 240 && b1 < 240){
        a1 = a1 + 15;  
        b1 = b1 + 15;  
      }
      a2 = 0;
      b2 = 0;
    }
    else if (Dane.value == 2104 || Dane.value == 56){
      if (a2 < 240 && b2 < 240){
        a2 = a2 + 15;  
        b2 = b2 + 15;  
      }
      a1 = 0;
      b1 = 0;
    }
    else if (Dane.value == 2060 || Dane.value == 12){
      a1 = 0;
      a2 = 0;
      b1 = 0;
      b2 = 0;
    }
    DiodIR.resume();
  }
  ustawMotor(input1APin, input2APin, a1, a2);
  ustawMotor(input1BPin, input2BPin, b1, b2);
}
