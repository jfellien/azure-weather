# Schummelzettel

## Create a function

`func function create`

## Add a flow

* HTTP POST für Temperaturdaten
* Queue: sinkTemperature
* Queue Trigger Function : umrechnen in Fahrenheit (1.8 * Temperatur °C + 32) speichern in Table Storage
* Get Function für Temperaturen aus Stadt und Tag
