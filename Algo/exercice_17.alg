<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER Big"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2lignes="" F2para="" F2defaut=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param maxBoucle="500000" epaisseurLigne="2" arrondiAuto="vrai" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="NbrNote EST_DU_TYPE NOMBRE" code="1#NOMBRE#NbrNote"/>
        <item algoitem="Note EST_DU_TYPE NOMBRE" code="1#NOMBRE#Note"/>
        <item algoitem="Tab EST_DU_TYPE LISTE" code="1#LISTE#Tab"/>
        <item algoitem="e EST_DU_TYPE NOMBRE" code="1#NOMBRE#e"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="Sum EST_DU_TYPE NOMBRE" code="1#NOMBRE#Sum"/>
        <item algoitem="Small EST_DU_TYPE NOMBRE" code="1#NOMBRE#Small"/>
        <item algoitem="Big EST_DU_TYPE NOMBRE" code="1#NOMBRE#Big"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE NbrNote" code="2#NbrNote#pasliste"/>
        <item algoitem="POUR e ALLANT_DE 0 A NbrNote -1" code="12#e#0#NbrNote -1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="LIRE Note" code="2#Note#pasliste"/>
            <item algoitem="Tab[e] PREND_LA_VALEUR Note" code="5#Tab#Note#e"/>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="Small PREND_LA_VALEUR Tab[0]" code="5#Small#Tab[0]#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A NbrNote -1" code="12#i#0#NbrNote -1">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
            <item algoitem="Sum PREND_LA_VALEUR Sum + Tab[i]" code="5#Sum#Sum + Tab[i]#pasliste"/>
            <item algoitem="SI (Tab[i]> Big) ALORS" code="6#Tab[i]> Big">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="Big PREND_LA_VALEUR Tab[i]" code="5#Big#Tab[i]#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="SI (Tab[i] &lt; Small) ALORS" code="6#Tab[i] &lt; Small">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="Small PREND_LA_VALEUR Tab[i]" code="5#Small#Tab[i]#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
            </item>
            <item algoitem="FIN_POUR" code="14#finpour"/>
        </item>
        <item algoitem="AFFICHER &quot;Moyenne :&quot;" code="4#Moyenne :#0"/>
        <item algoitem="AFFICHERCALCUL Sum / NbrNote" code="20#Sum / NbrNote#1"/>
        <item algoitem="AFFICHER &quot;Plus petit :&quot;" code="4#Plus petit :#0"/>
        <item algoitem="AFFICHER Small" code="3#Small#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Plus grand :&quot;" code="4#Plus grand :#0"/>
        <item algoitem="AFFICHER Big" code="3#Big#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
