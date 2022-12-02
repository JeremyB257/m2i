<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER Big"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2lignes="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" totalAffichages="1000" nbDecimales="8" maxBoucle="500000" arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Tab EST_DU_TYPE LISTE" code="1#LISTE#Tab"/>
        <item algoitem="i EST_DU_TYPE NOMBRE" code="1#NOMBRE#i"/>
        <item algoitem="Small EST_DU_TYPE NOMBRE" code="1#NOMBRE#Small"/>
        <item algoitem="Big EST_DU_TYPE NOMBRE" code="1#NOMBRE#Big"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="Tab[0] PREND_LA_VALEUR 10:16:18:20" code="5#Tab#10:16:18:20#0"/>
        <item algoitem="Small PREND_LA_VALEUR Tab[0]" code="5#Small#Tab[0]#pasliste"/>
        <item algoitem="POUR i ALLANT_DE 0 A 3" code="12#i#0#3">
            <item algoitem="DEBUT_POUR" code="13#debutpour"/>
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
        <item algoitem="AFFICHER &quot;Plus petit :&quot;" code="4#Plus petit :#1"/>
        <item algoitem="AFFICHER Small" code="3#Small#1#pasliste"/>
        <item algoitem="AFFICHER &quot;Plus grand :&quot;" code="4#Plus grand :#1"/>
        <item algoitem="AFFICHER Big" code="3#Big#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
