<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER &quot;Gagné&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2etat="inactif" F2lignes="" F2defaut="" F2para=""/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" arrondiAuto="vrai" maxBoucle="500000" epaisseurLigne="2" nbDecimales="8"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Nbr EST_DU_TYPE NOMBRE" code="1#NOMBRE#Nbr"/>
        <item algoitem="valid EST_DU_TYPE NOMBRE" code="1#NOMBRE#valid"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="Nbr PREND_LA_VALEUR ALGOBOX_ALEA_ENT(0,100)" code="5#Nbr#ALGOBOX_ALEA_ENT(0,100)#pasliste"/>
        <item algoitem="LIRE valid" code="2#valid#pasliste"/>
        <item algoitem="TANT_QUE (valid != Nbr) FAIRE" code="15#valid != Nbr">
            <item algoitem="DEBUT_TANT_QUE" code="16#debuttantque"/>
            <item algoitem="SI (valid &lt; Nbr) ALORS" code="6#valid &lt; Nbr">
                <item algoitem="DEBUT_SI" code="7#debutsi"/>
                <item algoitem="AFFICHER &quot;C'est plus grand&quot;" code="4#C'est plus grand#1"/>
                <item algoitem="LIRE valid" code="2#valid#pasliste"/>
                <item algoitem="FIN_SI" code="8#finsi"/>
                <item algoitem="SINON" code="9#sinon">
                    <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                    <item algoitem="AFFICHER &quot;C'est plus petit&quot;" code="4#C'est plus petit#1"/>
                    <item algoitem="LIRE valid" code="2#valid#pasliste"/>
                    <item algoitem="FIN_SINON" code="11#finsinon"/>
                </item>
            </item>
            <item algoitem="FIN_TANT_QUE" code="17#fintantque"/>
        </item>
        <item algoitem="AFFICHER &quot;Gagné&quot;" code="4#Gagné#1"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
