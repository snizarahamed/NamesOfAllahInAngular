import { Component,OnInit  } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-names-of-allah',
  templateUrl: './names-of-allah.component.html',
  styleUrls: ['./names-of-allah.component.scss']
})
export class NamesOfAllahComponent implements OnInit {
  
  selectedItem: any;
  name: any;
  number: any;
  meaning: any;
  explanation: any;
  allahNames: { name: string; number: string; }[] = [
    { name: "1. Ar-Rahman", number: "1" },
    { name: "2. Ar-Rahim", number: "2" },
    { name: "3. Al-Malik", number: "3" },
    { name: "4. Al-Quddus", number: "4" },
    { name: "5. As-Salam", number: "5" },
    { name: "6. Al-Mu'min", number: "6" },
    { name: "7. Al-Muhaymin", number: "7" },
    { name: "8. Al-Aziz", number: "8" },
    { name: "9. Al-Jabbar", number: "9" },
    { name: "10. Al-Mutakabbir", number: "10" },
    { name: "11. Al-Khaliq", number: "11" },
    { name: "12. Al-Bari", number: "12" },
    { name: "13. Al-Musawwir", number: "13" },
    { name: "14. Al-Ghaffar", number: "14" },
    { name: "15. Al-Qahhar", number: "15" },
    { name: "16. Al-Wahhab", number: "16" },
    { name: "17. Ar-Razzaq", number: "17" },
    { name: "18. Al-Fattah", number: "18" },
    { name: "19. Al-Alim", number: "19" },
    { name: "20. Al-Qabid", number: "20" },
    { name: "21. Al-Basit", number: "21" },
    { name: "22. Al-Khafid", number: "22" },
    { name: "23. Ar-Rafi", number: "23" },
    { name: "24. Al-Mu'izz", number: "24" },
    { name: "25. Al-Mudhill", number: "25" },
    { name: "26. As-Sami", number: "26" },
    { name: "27. Al-Basir", number: "27" },
    { name: "28. Al-Hakam", number: "28" },
    { name: "29. Al-Adl", number: "29" },
    { name: "30. Al-Latif", number: "30" },
    { name: "31. Al-Khabir", number: "31" },
    { name: "32. Al-Halim", number: "32" },
    { name: "33. Al-Azim", number: "33" },
    { name: "34. Al-Ghafur", number: "34" },
    { name: "35. Ash-Shakur", number: "35" },
    { name: "36. Al-Ali", number: "36" },
    { name: "37. Al-Kabir", number: "37" },
    { name: "38. Al-Hafiz", number: "38" },
    { name: "39. Al-Muqit", number: "39" },
    { name: "40. Al-Hasib", number: "40" },
    { name: "41. Al-Jalil", number: "41" },
    { name: "42. Al-Karim", number: "42" },
    { name: "43. Ar-Raqib", number: "43" },
    { name: "44. Al-Mujib", number: "44" },
    { name: "45. Al-Wasi", number: "45" },
    { name: "46. Al-Hakim", number: "46" },
    { name: "47. Al-Wadud", number: "47" },
    { name: "48. Al-Majid", number: "48" },
    { name: "49. Al-Ba'ith", number: "49" },
    { name: "50. Ash-Shahid", number: "50" },
    { name: "51. Al-Haqq", number: "51" },
    { name: "52. Al-Wakil", number: "52" },
    { name: "53. Al-Qawi", number: "53" },
    { name: "54. Al-Matin", number: "54" },
    { name: "55. Al-Wali", number: "55" },
    { name: "56. Al-Hamid", number: "56" },
    { name: "57. Al-Muhsi", number: "57" },
    { name: "58. Al-Mubdi", number: "58" },
    { name: "59. Al-Mu'id", number: "59" },
    { name: "60. Al-Muhyi", number: "60" },
    { name: "61. Al-Mumit", number: "61" },
    { name: "62. Al-Hayy", number: "62" },
    { name: "63. Al-Qayyum", number: "63" },
    { name: "64. Al-Wajid", number: "64" },
    { name: "65. Al-Majid", number: "65" },
    { name: "66. Al-Wahid", number: "66" },
    { name: "67. Al-Ahad", number: "67" },
    { name: "68. As-Samad", number: "68" },
    { name: "69. Al-Qadir", number: "69" },
    { name: "70. Al-Muqtadir", number: "70" },
    { name: "71. Al-Muqaddim", number: "71" },
    { name: "72. Al-Mu'akhkhir", number: "72" },
    { name: "73. Al-Awwal", number: "73" },
    { name: "74. Al-Akhir", number: "74" },
    { name: "75. Az-Zahir", number: "75" },
    { name: "76. Al-Batin", number: "76" },
    { name: "77. Al-Wali", number: "77" },
    { name: "78. Al-Muta'ali", number: "78" },
    { name: "79. Al-Barr", number: "79" },
    { name: "80. At-Tawwab", number: "80" },
    { name: "81. Al-Muntaqim", number: "81" },
    { name: "82. Al-Afuww", number: "82" },
    { name: "83. Ar-Ra'uf", number: "83" },
    { name: "84. Malik al-Mulk", number: "84" },
    { name: "85. Dhu-l-Jalal wa-l-Ikram", number: "85" },
    { name: "86. Al-Muqsit", number: "86" },
    { name: "87. Al-Jami", number: "87" },
    { name: "88. Al-Ghani", number: "88" },
    { name: "89. Al-Mughni", number: "89" },
    { name: "90. Al-Mani", number: "90" },
    { name: "91. Ad-Darr", number: "91" },
    { name: "92. An-Nafi", number: "92" },
    { name: "93. An-Nur", number: "93" },
    { name: "94. Al-Hadi", number: "94" },
    { name: "95. Al-Badi", number: "95" },
    { name: "96. Al-Baqi", number: "96" },
    { name: "97. Al-Warith", number: "97" },
    { name: "98. Ar-Rashid", number: "98" },
    { name: "99. As-Sabur", number: "99" },
   
  ];
  arabicword: any;
  languagevalues: string = 'en';

  constructor(private translationService: TranslationService) {}

  onDropdownChange(event: any) {
    this.languagevalues = event.target.value;
    this.translationService.setLanguage(this.languagevalues);
  }

 
  

  ngOnInit() {
   
    this.selectedItem = this.allahNames[0];
    this.updateValues();
    const fakeEvent = {
      target: {
        value: 'en' // Replace 'en' with the desired value
      }
    };

    this.onDropdownChange(fakeEvent);
  }

  updateValues() {
    if (this.selectedItem.number === '1') {
      this.arabicword = 'ٱلْرَّحْمَـانُ'
      this.name = 'Ar-Rahman';
      this.number = '	1';
      this.meaning = 'The Compassionate or Most Gracious ';
      this.explanation = 'Allah is infinitely compassionate and merciful towards His creation';
    } else if (this.selectedItem.number === '2') {
      this.arabicword = 'الرحيم'
      this.name = 'Ar-Rahim';
      this.number = '2';
      this.meaning = 'The Most Merciful';
      this.explanation = "Allah's mercy is abundant and continuous, specifically for the believers.";
    }
    else if (this.selectedItem.number === '3') {
      this.arabicword = 'الملك'
      this.name = 'Al-Malik';
      this.number = '3';
      this.meaning = 'The Sovereign Lord';
      this.explanation = "Allah is the ultimate ruler and owner of everything in the universe..";
    }else if (this.selectedItem.number === '4') {
      this.arabicword = 'القدوس'
      this.name = 'Al-Quddus';
      this.number = '4';
      this.meaning = 'The Holy';
      this.explanation = "Allah is pure and free from any imperfections.";
    }else if (this.selectedItem.number === '5') {
      this.arabicword = 'السلام'
      this.name = 'As-Salam';
      this.number = '5';
      this.meaning = 'The Source of Peace';
      this.explanation = "Allah is the ultimate source of peace, and His presence brings tranquility.";
    }else if (this.selectedItem.number === '6') {
      this.arabicword = 'المؤمن'
      this.name = "Al-Mu'min";
      this.number = '6';
      this.meaning = 'The Bestower of Faith';
      this.explanation = "Allah is the one who grants security and faith to believers.";
    }else if (this.selectedItem.number === '7') {
      this.arabicword = 'المهيمن'
      this.name = 'Al-Muhaymin';
      this.number = '7';
      this.meaning = 'The Guardian';
      this.explanation = "Allah is the protector and guardian of all.";
    }else if (this.selectedItem.number === '8') {
      this.arabicword = 'العزيز'
      this.name = 'Al-Aziz';
      this.number = '8';
      this.meaning = 'The Almighty';
      this.explanation = "Allah is powerful and mighty.";
    }else if (this.selectedItem.number === '9') {
      this.arabicword = 'الجبار'
      this.name = 'Al-Jabbar';
      this.number = '9';
      this.meaning = 'The Compellerl';
      this.explanation = "Allah has the power to enforce His will.";
    }else if (this.selectedItem.number === '10') {
      this.arabicword = 'المتكبر'
      this.name = 'Al-Mutakabbir';
      this.number = '10';
      this.meaning = 'The Majestic';
      this.explanation = "Allah is the ultimate source of greatness and pride.";
    }else if (this.selectedItem.number === '11') {
      this.arabicword = 'ٱلْخَالِقُ'
      this.name = 'Al-Khaliq';
      this.number = '	11';
      this.meaning = 'The Creator ';
      this.explanation = 'Allah is the originator and designer of all existence.';
    }
    else if (this.selectedItem.number === '12') {
      this.arabicword = 'ٱلْبَارِئُ'
      this.name = 'Al-Bari';
      this.number = '12';
      this.meaning = 'The Evolver';
      this.explanation = "Allah shapes and forms everything according to His plan.";
    }
    else if (this.selectedItem.number === '13') {
      this.arabicword = 'ٱلْمُصَوِّرُ'
      this.name = 'Al-Musawwir';
      this.number = '13';
      this.meaning = 'The Fashioner';
      this.explanation = "Allah fashions His creation with perfect design.";
    }else if (this.selectedItem.number === '14') {
      this.arabicword = 'ٱلْغَفَّارُ'
      this.name = 'Al-Ghaffar';
      this.number = '14';
      this.meaning = 'The Forgiving';
      this.explanation = "Allah is the pardoner of sins..";
    }else if (this.selectedItem.number === '15') {
      this.arabicword = 'ٱلْقَهَّارُ'
      this.name = 'Al-Qahhar';
      this.number = '15';
      this.meaning = 'The Subduer';
      this.explanation = "Allah has absolute control over all..";
    }else if (this.selectedItem.number === '16') {
      this.arabicword = 'ٱلْوَهَّابُ'
      this.name = "Al-wahhaab";
      this.number = '16';
      this.meaning = 'The Bestower';
      this.explanation = "Allah is the giver of gifts and blessings.";
    }else if (this.selectedItem.number === '17') {
      this.arabicword = 'ٱلْرَّزَّاقُ'
      this.name = 'Ar-Razzaaq';
      this.number = '17';
      this.meaning = 'The Provide';
      this.explanation = "Allah sustains and nourishes His creation.";
    }else if (this.selectedItem.number === '18') {
      this.arabicword = 'ٱلْفَتَّاحُ'
      this.name = 'Al-fattah';
      this.number = '18';
      this.meaning = 'The Opener';
      this.explanation = "Allah opens doors and grants victory.";
    }else if (this.selectedItem.number === '19') {
      this.arabicword = 'ٱلْعَلِيمُ'
      this.name = 'Al-Alim';
      this.number = '19';
      this.meaning = 'The Knower of All';
      this.explanation = "Allah has complete knowledge of everything.";
    }else if (this.selectedItem.number === '20') {
      this.arabicword = 'ٱلْقَابِضُ'
      this.name = 'Al-Qaabid';
      this.number = '20';
      this.meaning = 'The Withholder';
      this.explanation = "Allah has the power to restrain and hold back.";
    }    if (this.selectedItem.number === '21') {
      this.arabicword = 'ٱلْبَاسِطُ'
      this.name = 'Al-Basit';
      this.number = '	21';
      this.meaning = 'The Extender ';
      this.explanation = 'Allah expands and provides without limit.';
    } else if (this.selectedItem.number === '22') {
      this.arabicword = 'ٱلْخَافِضُ'
      this.name = 'Al-Khafid';
      this.number = '22';
      this.meaning = 'The Abaser';
      this.explanation = "Allah can humble and lower those who are arrogant.";
    }
    else if (this.selectedItem.number === '23') {
      this.arabicword = 'ٱلْرَّافِعُ'
      this.name = 'Ar-Rafi ';
      this.number = '23';
      this.meaning = 'The Exalter';
      this.explanation = "Allah elevates and raises the status of those who are humble.";
    }else if (this.selectedItem.number === '24') {
      this.arabicword = 'ٱلْمُعِزُّ'
      this.name = "Al-Mu'izz";
      this.number = '24';
      this.meaning = 'The Giver of Honor';
      this.explanation = "Allah grants honor and dignity.";
    }else if (this.selectedItem.number === '25') {
      this.arabicword = 'ٱلْمُذِلُّ'
      this.name = 'Al-Mudhill';
      this.number = '25';
      this.meaning = 'The Giver of Dishonor';
      this.explanation = "Allah can humble those who oppose Him.";
    }else if (this.selectedItem.number === '26') {
      this.arabicword = 'ٱلْسَّمِيعُ'
      this.name = "As-Samee";
      this.number = '26';
      this.meaning = 'The All-Hearing';
      this.explanation = "Allah hears all sounds and prayers.";
    }else if (this.selectedItem.number === '27') {
      this.arabicword = 'ٱلْبَصِيرُ'
      this.name = 'Al-Basir';
      this.number = '27';
      this.meaning = 'The All-Seeing';
      this.explanation = "Allah sees everything, even the hidden.";
    }else if (this.selectedItem.number === '28') {
      this.arabicword = 'ٱلْحَكَمُ'
      this.name = 'Al-hakam';
      this.number = '28';
      this.meaning = 'The Judge';
      this.explanation = "Allah is the ultimate arbiter of justice.";
    }else if (this.selectedItem.number === '29') {
      this.arabicword = 'ٱلْعَدْلُ'
      this.name = 'Al-Adl';
      this.number = '29';
      this.meaning = 'The Just';
      this.explanation = "Allah is perfectly fair in His judgments.";
    }else if (this.selectedItem.number === '30') {
      this.arabicword = 'ٱلْلَّطِيفُ'
      this.name = 'Al-Latif';
      this.number = '30';
      this.meaning = 'The Subtle One';
      this.explanation = "Allah's actions and blessings are often subtle and delicate.";
    }else if (this.selectedItem.number === '31') {
      this.arabicword = 'ٱلْخَبِيرُ'
      this.name = 'Al-Khabir';
      this.number = '	31';
      this.meaning = 'The All-Aware ';
      this.explanation = 'Allah is fully aware of all matters';
    }
    else if (this.selectedItem.number === '32') {
      this.arabicword = 'ٱلْحَلِيمُ'
      this.name = 'Al-Halim';
      this.number = '32';
      this.meaning = 'The Forbearingl';
      this.explanation = "Allah is patient and does not rush to punish those who err.";
    }
    else if (this.selectedItem.number === '33') {
      this.arabicword = 'ٱلْعَظِيمُ'
      this.name = 'Al-Azim';
      this.number = '33';
      this.meaning = 'The Magnificent';
      this.explanation = "Allah's greatness is beyond comprehension.";
    }else if (this.selectedItem.number === '34') {
      this.arabicword = 'ٱلْغَفُورُ'
      this.name = 'Al-Ghafur';
      this.number = '34';
      this.meaning = 'The All-Forgiving';
      this.explanation = " Allah forgives sins abundantly.";
    }else if (this.selectedItem.number === '35') {
      this.arabicword = 'ٱلْشَّكُورُ'
      this.name = 'Ash-Shakur';
      this.number = '35';
      this.meaning = 'The Appreciative';
      this.explanation = "Allah appreciates and rewards good deeds.";
    }else if (this.selectedItem.number === '36') {
      this.arabicword = 'ٱلْعَلِيُّ'
      this.name = "Al-Ali";
      this.number = '36';
      this.meaning = 'The Most High';
      this.explanation = "Allah is exalted above all.";
    }else if (this.selectedItem.number === '37') {
      this.arabicword = 'ٱلْكَبِيرُ'
      this.name = 'Al-Kabir';
      this.number = '37';
      this.meaning = 'The Most Great';
      this.explanation = "Allah's greatness is limitless.";
    }else if (this.selectedItem.number === '38') {
      this.arabicword = 'ٱلْحَفِيظُ'
      this.name = 'Al-Hafiz';
      this.number = '38';
      this.meaning = 'The Preserver';
      this.explanation = " Allah safeguards His creation.";
    }else if (this.selectedItem.number === '39') {
      this.arabicword = 'ٱلْمُقِيتُ'
      this.name = 'Al-Muqit';
      this.number = '39';
      this.meaning = 'The Nourisher';
      this.explanation = "Allah provides for all His creatures.";
    }else if (this.selectedItem.number === '40') {
      this.arabicword = 'ٱلْحَسِيبُ'
      this.name = 'Al-Hasib';
      this.number = '40';
      this.meaning = 'The Reckoner';
      this.explanation = "Allah takes account of all deeds.";
    }else if (this.selectedItem.number === '41') {
      this.arabicword = 'ٱلْجَلِيلُ'
      this.name = 'Al-Jaleel';
      this.number = '41';
      this.meaning = 'The Majestic';
      this.explanation = "Allah's glory and majesty are awe-inspiring.";
      }else if (this.selectedItem.number === '42') {
      this.arabicword = 'ٱلْكَرِيمُ'
      this.name = 'Al-Kareem';
      this.number = '42';
      this.meaning = 'The Most Esteemed';
      this.explanation = "Allah is generous and bestows His blessings abundantly.";
      }else if (this.selectedItem.number === '43') {
      this.arabicword = 'ٱلْرَّقِيبُ'
      this.name = 'Al-Raqeeb';
      this.number = '43';
      this.meaning = 'The Watchful';
      this.explanation = "Allah is ever-vigilant and observant of His creation.";
      }else if (this.selectedItem.number === '44') {
      this.arabicword = 'ٱلْمُجِيبُ'
      this.name = 'Al-Mujeeb';
      this.number = '44';
      this.meaning = 'The Responsive One';
      this.explanation = " Allah answers the supplications of those who call upon Him.";
      }else if (this.selectedItem.number === '45') {
      this.arabicword = 'ٱلْوَاسِعُ'
      this.name = 'Al-Waasi';
      this.number = '45';
      this.meaning = 'The All-Encompassing or the Boundless';
      this.explanation = "Allah's mercy and knowledge encompass everything.";
      }else if (this.selectedItem.number === '46') {
      this.arabicword = 'ٱلْحَكِيمُ'
      this.name = 'Al-Hakeem';
      this.number = '46';
      this.meaning = 'The All-Wise';
      this.explanation = "Allah's wisdom guides His actions and decrees.";
      }else if (this.selectedItem.number === '47') {
      this.arabicword = 'ٱلْوَدُودُ'
      this.name = 'Al-Wadood';
      this.number = '47';
      this.meaning = 'The Most Loving';
      this.explanation = "Allah's love is infinite and unconditional.";
      }else if (this.selectedItem.number === '48') {
      this.arabicword = 'ٱلْمَجِيدُ'
      this.name = 'Al-Majeed';
      this.number = '48';
      this.meaning = 'The Most Honorable';
      this.explanation = "Allah's glory and honor are unmatched.";
      }else if (this.selectedItem.number === '49') {
      this.arabicword = 'ٱلْبَاعِثُ'
      this.name = "Al-Ba'ith";
      this.number = '49';
      this.meaning = 'The Resurrector ';
      this.explanation = "Allah will raise all beings on the Day of Judgment.";
      }else if (this.selectedItem.number === '50') {
      this.arabicword = 'ٱلْشَّهِيدُ'
      this.name = 'Ash-Shaheed';
      this.number = '50';
      this.meaning = 'The All- and Ever Witnessing';
      this.explanation = " Allah bears witness to all that happens in the universe.";
      }else if (this.selectedItem.number === '51') {
      this.arabicword = 'ٱلْحَقُّ'
      this.name = 'Al-Haqq';
      this.number = '51';
      this.meaning = 'The Absolute Truth';
      this.explanation = " Allah is the ultimate reality, and His truth is absolut.";
      }else if (this.selectedItem.number === '52') {
      this.arabicword = 'ٱلْوَكِيلُ'
      this.name = 'Al-Wakeel';
      this.number = '52';
      this.meaning = 'The Trustee, The Disposer of Affairs';
      this.explanation = " Allah is the one who can be relied upon for all needs.";
      }else if (this.selectedItem.number === '53') {
      this.arabicword = 'ٱلْقَوِيُّ'
      this.name = 'Al-Qawiyy';
      this.number = '53';
      this.meaning = "The All-Strong";
      this.explanation = "Allah possesses unmatched strength and power.";
      }else if (this.selectedItem.number === '54') {
      this.arabicword = 'ٱلْمَتِينُ'
      this.name = 'Al-Mateen';
      this.number = '54';
      this.meaning = 'The Firm, The Steadfast';
      this.explanation = "Allah's resolve is unwavering.";
      }else if (this.selectedItem.number === '55') {
      this.arabicword = 'ٱلْوَلِيُّ'
      this.name = 'Al-Waliyy';
      this.number = '55';
      this.meaning = 'The Protecting Associate';
      this.explanation = "Allah is the guardian and protector of His servants.";
      }else if (this.selectedItem.number === '56') {
      this.arabicword = 'ٱلْحَمِيدُ'
      this.name = 'Al-Hameed';
      this.number = '56';
      this.meaning = 'The Praiseworthy';
      this.explanation = "Allah is deserving of all praise and gratitude.";
      }else if (this.selectedItem.number === '57') {
      this.arabicword = 'ٱلْمُحْصِيُ'
      this.name = 'Al-Muhsee';
      this.number = '57';
      this.meaning = 'The All-Enumerating, The Counter';
      this.explanation = "Allah keeps a perfect record of all deeds.";
      }else if (this.selectedItem.number === '58') {
      this.arabicword = 'ٱلْمُبْدِئُ'
      this.name = 'Al-Mubdi';
      this.number = '58';
      this.meaning = 'The Originator, The Initiator';
      this.explanation = "Allah is the source of all creation.";
      }else if (this.selectedItem.number === '59') {
      this.arabicword = 'ٱلْمُعِيدُ'
      this.name = "Al-Mu'id";
      this.number = '59';
      this.meaning = 'The Restorer, The Reinstater';
      this.explanation = "Allah resurrects and brings life back to the dead.";
      }else if (this.selectedItem.number === '60') {
      this.arabicword = 'ٱلْمُحْيِى'
      this.name = "Al-Muhyee";
      this.number = '60';
      this.meaning = 'The Giver of Life';
      this.explanation = "Allah is the one who gives life to all living beings.";
      }else if (this.selectedItem.number === '61') {
      this.arabicword = 'ٱلْمُمِيتُ'
      this.name = 'Al-Mumeet';
      this.number = '61';
      this.meaning = 'The Bringer of Death, the Destroyer';
      this.explanation = "Allah is the one who causes death.";
      }else if (this.selectedItem.number === '62') {
      this.arabicword = 'ٱلْحَىُّ'
      this.name = 'Al-Hayy';
      this.number = '62';
      this.meaning = 'The Ever-Living';
      this.explanation = "Allah is ever-living and eternal.";
      }else if (this.selectedItem.number === '63') {
      this.arabicword = 'ٱلْقَيُّومُ'
      this.name = 'Al-Qayyoom';
      this.number = '63';
      this.meaning = 'The Sustainer, The Self-Subsisting';
      this.explanation = "Allah is self-sufficient and does not need anything.";
      }else if (this.selectedItem.number === '64') {
      this.arabicword = 'ٱلْوَاجِدُ'
      this.name = 'Al-Waajid';
      this.number = '64';
      this.meaning = 'The Perceiver';
      this.explanation = " Allah knows where everything is and can provide what is needed.";
      }else if (this.selectedItem.number === '65') {
      this.arabicword = 'ٱلْمَاجِدُ'
      this.name = 'Al-Maajid';
      this.number = '65';
      this.meaning = 'The Illustrious, the Magnificent';
      this.explanation = "Allah is characterized by nobility and honor.";
      }else if (this.selectedItem.number === '66') {
      this.arabicword = 'ٱلْوَاحِدُ'
      this.name = 'Al-Waahid';
      this.number = '66';
      this.meaning = 'The One';
      this.explanation = "Allah is uniquely one and without partners.";
      }else if (this.selectedItem.number === '67') {
      this.arabicword = 'ٱلْأَحَد'
      this.name = 'Al-Ahad';
      this.number = '67';
      this.meaning = 'The One and Only.';
      this.explanation = "He is Allah, the One and Only.";
      }else if (this.selectedItem.number === '68') {
      this.arabicword = 'ٱلْصَّمَدُ'
      this.name = 'As-Samad';
      this.number = '68';
      this.meaning = 'The Eternal';
      this.explanation = " Allah is eternal and self-sufficient";
      }else if (this.selectedItem.number === '69') {
      this.arabicword = 'ٱلْقَادِرُ'
      this.name = "Al-Qadir";
      this.number = '69';
      this.meaning = 'The Powerful';
      this.explanation = "Allah has unlimited power and can do anything";
      }else if (this.selectedItem.number === '70') {
      this.arabicword = 'ٱلْمُقْتَدِرُ'
      this.name = "Al-Muqtadir";
      this.number = '70';
      this.meaning = 'The Omnipotent';
      this.explanation = "Allah has control over all matters.";
      }else if (this.selectedItem.number === '71') {
      this.arabicword = 'ٱلْمُقَدِّمُ'
      this.name = "Al-Muqaddim";
      this.number = '71';
      this.meaning = 'The Promoter';
      this.explanation = "Allah can bring forward what He wills.";
      }
      else if (this.selectedItem.number === '72') {
      this.arabicword = 'ٱلْمُؤَخِّرُ'
      this.name = "Al-Mu'akhhir";
      this.number = '72';
      this.meaning = 'The Delayer, the Retarder';
      this.explanation = "Allah can delay what He wills.";
      }else if (this.selectedItem.number === '73') {
      this.arabicword = 'ٱلأَوَّلُ'
      this.name = "Al-Awwal";
      this.number = '73';
      this.meaning = 'The First';
      this.explanation = "Allah is the initial cause and the beginning of all things.";
      }else if (this.selectedItem.number === '74') {
      this.arabicword = 'ٱلْآخِرُ'
      this.name = "Al-Aakhir";
      this.number = '74';
      this.meaning = 'The Last';
      this.explanation = "Allah is the ultimate end and final destination.";
      }else if (this.selectedItem.number === '75') {
      this.arabicword = 'ٱلْظَّاهِرُ'
      this.name = "Az-dhaahir";
      this.number = '75';
      this.meaning = 'The Mainfest';
      this.explanation = "Allah's presence and attributes are evident in the universe.";
      }else if (this.selectedItem.number === '76') {
      this.arabicword = 'ٱلْبَاطِنُ'
      this.name = "Al-Baatin";
      this.number = '76';
      this.meaning = "The Hidden";
      this.explanation = "Allah's essence and mysteries are beyond human comprehension.";
      }else if (this.selectedItem.number === '77') {
      this.arabicword = 'ٱلْوَالِي'
      this.name = "Al-Waali";
      this.number = '77';
      this.meaning = 'The Governor, The Patron';
      this.explanation = "Allah is the guardian and protector of His servants.";
      }else if (this.selectedItem.number === '78') {
      this.arabicword = 'ٱلْمُتَعَالِي'
      this.name = "Al-Muta'ali";
      this.number = '78';
      this.meaning = 'The Self Exalted';
      this.explanation = "Allah's position is exalted and above all";
      }else if (this.selectedItem.number === '79') {
      this.arabicword = 'ٱلْبَرُّ'
      this.name = "Al-Barr";
      this.number = '79';
      this.meaning = 'The Source of Goodness, the Kind Benefactor';
      this.explanation = "Allah is the source of all goodness and virtue";
      }else if (this.selectedItem.number === '80') {
      this.arabicword = 'ٱلْتَّوَّابُ'
      this.name = "Al-Tawwab";
      this.number = '80';
      this.meaning = 'The Ever-Pardoning, The Relenting';
      this.explanation = "Allah accepts the repentance of those who turn to Him sincerely.";
      }else if (this.selectedItem.number === '81') {
      this.arabicword = 'ٱلْمُنْتَقِمُ'
      this.name = "Al-Muntaqim";
      this.number = '81';
      this.meaning = 'The Avenger';
      this.explanation = "Allah takes revenge against those who oppress and harm others.";
      }else if (this.selectedItem.number === '82') {
      this.arabicword = 'ٱلْعَفُوُّ'
      this.name = "Al-Afuww";
      this.number = '82';
      this.meaning = 'The Pardoner';
      this.explanation = "Allah pardons and forgives sins generously.";
      }else if (this.selectedItem.number === '83') {
      this.arabicword = 'ٱلْرَّؤُفُ'
      this.name = "Ar-Ra'oof";
      this.number = '83';
      this.meaning = 'The Most Kind';
      this.explanation = " Allah is compassionate and gentle";
      }else if (this.selectedItem.number === '84') {
      this.arabicword = 'مَالِكُ ٱلْمُلْكُ'
      this.name = "Maalik-Ul-Mulk";
      this.number = '84';
      this.meaning = 'Master of the Kingdom';
      this.explanation = "Allah is the ultimate owner of all dominion";
      }else if (this.selectedItem.number === '85') {
      this.arabicword = 'ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ '
      this.name = "Dhul-Jalaali-Wal-Ikraam";
      this.number = '85';
      this.meaning = 'Possessor of Glory and Honour, Lord of Majesty and Generosity';
      this.explanation = "Allah combines majesty and generosity in His character.";
      }else if (this.selectedItem.number === '86') {
      this.arabicword = 'ٱلْمُقْسِطُ'
      this.name = "Al-Muqsit";
      this.number = '86';
      this.meaning = 'Gatherer ';
      this.explanation = "Allah is just and fair in all His dealings.";
      }else if (this.selectedItem.number === '87') {
      this.arabicword = 'ٱلْجَامِعُ'
      this.name = "Al-Jaami";
      this.number = '87';
      this.meaning = 'The Gatherer';
      this.explanation = "Allah will gather all beings for judgment on the Day of Resurrection.";
      }else if (this.selectedItem.number === '88') {
      this.arabicword = 'ٱلْغَنيُّ'
      this.name = "Al-Ghaniyy";
      this.number = '88';
      this.meaning = 'The Self-Sufficient';
      this.explanation = "Allah is self-sufficient and free of any need";
      }else if (this.selectedItem.number === '89') {
      this.arabicword = 'ٱلْمُغْنِيُّ'
      this.name = "Al-Mughni";
      this.number = '89';
      this.meaning = 'The Enricher';
      this.explanation = "Allah enriches and provides for His servants.";
      }else if (this.selectedItem.number === '90') {
      this.arabicword = 'ٱلْمَانِعُ'
      this.name = "Al-Mani";
      this.number = '90';
      this.meaning = 'The Withholder';
      this.explanation = " Allah can prevent harm and protect His servants.";
      }else if (this.selectedItem.number === '91') {
      this.arabicword = 'ٱلْضَّارُ'
      this.name = "Ad-Dharr";
      this.number = '91';
      this.meaning = 'The Inflictor of Harm';
      this.explanation = " Allah can allow harm to befall those who deserve it";
      }else if (this.selectedItem.number === '92') {
      this.arabicword = 'ٱلْنَّافِعُ'
      this.name = "AN-Nafi";
      this.number = '92';
      this.meaning = 'The Propitious, the Benefactor';
      this.explanation = "Allah grants benefits and blessings to His servants";
      }
      else if (this.selectedItem.number === '93') {
      this.arabicword = 'ٱلْنُّورُ'
      this.name = "AN-Nur";
      this.number = '93';
      this.meaning = 'The Light';
      this.explanation = "Allah is the source of guidance and illumination";
      }
      else if (this.selectedItem.number === '94') {
      this.arabicword = 'ٱلْهَادِي'
      this.name = "Al-Haadi";
      this.number = '94';
      this.meaning = 'The Guide';
      this.explanation = "Allah guides those who seek His guidance";
      }else if (this.selectedItem.number === '95') {
      this.arabicword = 'ٱلْبَدِيعُ'
      this.name = "Al-Badee";
      this.number = '95';
      this.meaning = "The Incomparable ";
      this.explanation = "Allah's creations are beyond compare.";
      }else if (this.selectedItem.number === '96') {
      this.arabicword = 'ٱلْبَاقِي'
      this.name = "Al-Baaqi";
      this.number = '96';
      this.meaning = ' The Everlasting';
      this.explanation = "Allah is eternal and will remain after all else perishes";
      }else if (this.selectedItem.number === '97') {
      this.arabicword = 'ٱلْوَارِثُ'
      this.name = "Al-Waarith";
      this.number = '97';
      this.meaning = 'The Heir';
      this.explanation = "Allah will inherit all of creation in the end";
      }else if (this.selectedItem.number === '98') {
      this.arabicword = 'ٱلْرَّشِيدُ'
      this.name = "Ar-Rasheed";
      this.number = '98';
      this.meaning = 'The Righteous Teacher';
      this.explanation = "Allah is the ultimate guide and instructor";
      }else if (this.selectedItem.number === '99') {
      this.arabicword = 'ٱلْصَّبُورُ'
      this.name = "As-Saboor";
      this.number = '99';
      this.meaning = 'The Heir';
      this.explanation = "Allah is endlessly patient, especially with His creation's shortcomings and transgressions.";
      }
  }
}
