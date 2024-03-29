# tickets - automatizēta lidmašīnas biļešu cenu salidzināšanas sistēma

## Problēmas raksturojums

Pērkot biļeti uz lidmašīnu, autors ir pamanījis, ka izvēlējoties biļeti “turp un atpakaļ”, biļetes cenu varēs redzēt tikai izvēlējoties izlidošanas dienu, kas apgrūtina dažādu variantu cenas salīdzināšanu. Lai atrisinātu šo problēmu, tika izstrādāta programmatūra, kas saņem no lietotāja plānotā lidojuma galapunktus un datumus, kā arī lietotāja “fleksabilitāti” (cik daudz vēlāk par ieplānoto datumu viņš ir gatavs lidot) un maksimālo brauciena ilgumu (dienu skaits starp reisiem turp un atpakaļ). Programma automātiski ievada datus airBaltic mājaslapā un sastāda Excel tabulu ar biļešu cenām katram iespējamajam (lidojuma datums turp-lidojuma datums atpakaļ) pārim.

## Projekta uzdevums

Šī projekta ietvaros ir izstrādātā interaktīva sistēma, ko izmantojot ir iespējams salīdzināt biļešu cenas atkarība no lidojuma datumiem. Šajā projektā izmantotas metodes no sekojošām tēmām:

* Datu saglabāšana un nolasīšana no Excel .xlsx faila;
* Tīmekļa skrāpēšana, tajā skaitā automātiskā pārvietošanas pa mājaslapu;
* Automātiskā **output.xlsx** failā izveide, restārtējot programmu
## Izmantotās Python bibliotēkas

* **tkinter, tkinter.ttk** - izmantots, lai izveidotu interaktīvu interfeisu ar lietotāju;
* **os** - mapju izveidošana un iedarbībai ar operētājsistēmu;
* **datetime** - (*date, datetime*) – darbību ar datumiem optimizēšanai;
* **selenium** - (*webdriver, By, WebDriverWait, expected_conditions, TimeoutException*) – tīmekļa skrāpēšanai;
* **time** - komandas izpildes iepauzēšanai, lai mājaslapas saturs paspētu ielādēties;


## Failu apraksti

* **main.py** - programmatūras fails
* **output.xlsx** - fails, kurā tika ierakstīts cenu salīdzināšanas rezultāts tabulas veidā
* **README.md** - dokumentācijas fails
* **.gitignore** - git ignorēšanas fails (saglabā norādītos failus tikai lokāli)
* **requirements.txt** - nepieciešamo bibliotēku lejupielādes fails
* * **web page** - mape, tajā saglābāts AirBaltic mājaslapas kods, kuram izstradātā programma, gadījuma ja mājaslapas kods tiks mainīts, programmas darbspējību iespējams parbaud'īt izmantojot sagalbāto mājaslapas kodu.

## Uzstādīšanas instrukcija

### Izveidot lokālu projekta kopiju
Lejupielādēt lokālu projekta kopiju, piemēram, izmantojot **git**:
```
git clone https://github.com/petr](https://github.com/petrgabuniia/tickets
```
Pēc tam lejupielādēt nepieciešamos python moduļus:
```
pip install -r requirements.txt
```

### Palaist programmu
Uzsākt main.py faila izpildi
```
Ievadīt izlidošanas līdostas trisburta kodu (piemēram Rīgas līdostas kods ir RIX)
```
Ievadīt atlīdošanas līdostas trisburta kodu
```
Ierakstīt datumu, sakot no kura tiks mēklētas biļetes
```
Ievādīt maksimālo iespējamo kavēšanās dienu skaitu (cik dienas vēlāk, nekā ieplānotājs datums jāmeklē biļetes), maksimālā vērtība - 25
```
Ievadīt maksimālo iespējamo brauiena ilgumu (starp izlidošanu un atgriešanos), maksimālā vērtība - 25
```
Sagaidīt, kamēr programma salasīs datus par biļesu cenām 
```
Apskātīt cenas salidzināsanas rezultātu **output.xlsx** failā
```
