 
const int ledPin = 13;
const int buzzerPin = 12;
const int ldrPin = A0;

void setup() {

  Serial.begin(9600); // calibragem do sensor LDR
 
  pinMode(ledPin, OUTPUT);
  pinMode(buzzerPin, OUTPUT);
  pinMode(ldrPin, INPUT);
}

void loop() {

  int ldrValor = analogRead(ldrPin); // lê o estado do valor LDR
  Serial.println(ldrValor);

  if (ldrValor > 200) {

    tone(buzzerPin, 800);
    digitalWrite(ledPin, HIGH);
    delay(100);

    noTone(buzzerPin);
    digitalWrite(ledPin, LOW);
    delay(100);

    Serial.println("BEEP!!! - ALARME ON");
  }
  else{

    noTone(buzzerPin);
    digitalWrite(ledPin, LOW);

    //Serial.println("... ALARME OFF");
  }
}
