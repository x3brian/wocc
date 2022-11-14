
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playbutton}","click",function(sym,e){sym.play("play");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5201,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'playbutton'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","mouseenter",function(sym,e){sym.$('playup').toggle();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle}","mouseout",function(sym,e){sym.$('playup').toggle();});
//Edge binding end
})("playbutton");
//Edge symbol end:'playbutton'

//=========================================================

//Edge symbol: 'leveltoggle'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_leveltworollover}","mouseover",function(sym,e){sym.$('leveltwo').toggle();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leveltworollover}","mouseout",function(sym,e){sym.$('leveltwo').toggle();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_levelonerollover}","mouseover",function(sym,e){sym.$('levelone').toggle();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_levelonerollover}","mouseout",function(sym,e){sym.$('levelone').toggle();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",12395,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2944,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-hub}","click",function(sym,e){sym.play("hub");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-ticketing}","click",function(sym,e){sym.play("ticketing");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-theater}","click",function(sym,e){sym.play("theater");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3633,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-loft}","click",function(sym,e){sym.play("loft");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-vault}","click",function(sym,e){sym.play("vault");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4423,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-milestones}","click",function(sym,e){sym.play("milestones");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4869,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-bottleworks}","click",function(sym,e){sym.play("bottleworks");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5413,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-hubpatio}","click",function(sym,e){sym.play("hubpatio");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5904,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6396,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6939,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-pemberton}","click",function(sym,e){sym.play("pemberton");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-polarbear}","click",function(sym,e){sym.play("polarbear");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_backbuttonbox}","click",function(sym,e){sym.play("play");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextLOBBYLOFT}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextLOBBYLOFT}","mouseover",function(sym,e){sym.$("TextLOBBYLOFT").css("color","#f40000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextLOBBYLOFT}","mouseout",function(sym,e){sym.$("TextLOBBYLOFT").css("color","#636466");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCOCACOLATHEATER}","mouseover",function(sym,e){sym.$("TextCOCACOLATHEATER").css("color","#f40000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCOCACOLATHEATER}","mouseout",function(sym,e){sym.$("TextCOCACOLATHEATER").css("color","#636466");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextCOCACOLATHEATER}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextTHEHUB}","mouseover",function(sym,e){sym.$("TextTHEHUB").css("color","#f40000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextTHEHUB}","mouseout",function(sym,e){sym.$("TextTHEHUB").css("color","#636466");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextTHEHUB}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextPEMBERTON}","mouseover",function(sym,e){sym.$("TextPEMBERTON").css("color","#f40000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextPEMBERTON}","mouseout",function(sym,e){sym.$("TextPEMBERTON").css("color","#636466");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_TextPEMBERTON}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thehublink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_lobbyloftlink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_theaterlink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_milestoneslink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bottleworkslink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hublink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ticketinglink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_polarbearlink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pembertonlink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_vaultlink}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",9684,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hubtext}","mouseover",function(sym,e){sym.$("hubtext").css("color","#f40000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hubtext}","mouseout",function(sym,e){sym.$("hubtext").css("color","#636466");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hubtext}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_tasteittext}","mouseover",function(sym,e){sym.$("tasteittext").css("color","#f40000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_tasteittext}","mouseout",function(sym,e){sym.$("tasteittext").css("color","#636466");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_tasteittext}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bcstext}","mouseover",function(sym,e){sym.$("bcstext").css("color","#f40000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bcstext}","mouseout",function(sym,e){sym.$("bcstext").css("color","#636466");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bcstext}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-4d}","click",function(sym,e){sym.play("4d");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-hub2}","click",function(sym,e){sym.play("hub2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-pop}","click",function(sym,e){sym.play("pop");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-pauses}","click",function(sym,e){sym.play("pauses");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-tasteit}","click",function(sym,e){sym.play("tasteit");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-bcs}","click",function(sym,e){sym.play("bcs");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10204,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10555,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10877,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11568,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_arrow-baker}","click",function(sym,e){sym.play("baker");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11918,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_playback}","click",function(sym,e){sym.play("play");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bcsinfo}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bakerinfo}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_tasteitinfo}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_pausesinfo}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_popinfo}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_hubinfo}","click",function(sym,e){window.open("http://www.worldofcoca-cola.com","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_levelonerollover}","mouseup",function(sym,e){sym.play("level1");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leveltworollover}","mouseup",function(sym,e){sym.play("level2");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_levelonerollover}","mousedown",function(sym,e){sym.$('levelone').toggle();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_leveltworollover}","mousedown",function(sym,e){sym.$('levelone').toggle();});
//Edge binding end
})("leveltoggle");
//Edge symbol end:'leveltoggle'

//=========================================================

//Edge symbol: 'arrow1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Rectangle4}","mouseup",function(sym,e){sym.$('arrow').toggle();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Rectangle4}","mousedown",function(sym,e){sym.$('arrow').toggle();});
//Edge binding end
})("arrow1");
//Edge symbol end:'arrow1'
})(jQuery,AdobeEdge,"EDGE-72891999");