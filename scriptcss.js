var nameColor = ['Pink','LightPink','HotPink','DeepPink','PaleVioletRed','MediumVioletRed','LightSalmon','Salmon','DarkSalmon','LightCoral','IndianRed','Crimson','Firebrick','DarkRed','Red','OrangeRed','Tomato','Coral','DarkOrange','Orange','Yellow','LightYellow','LemonChiffon','LightGoldenrodYellow','PapayaWhip','Moccasin','PeachPuff','PaleGoldenrod','Khaki','DarkKhaki','Gold','Cornsilk','BlanchedAlmond','Bisque','NavajoWhite','Wheat','Burlywood','Tan','RosyBrown','SandyBrown','Goldenrod','DarkGoldenrod','Peru','Chocolate','SaddleBrown','Sienna','Brown','Maroon','DarkOliveGreen','Olive','OliveDrab','YellowGreen','LimeGreen','Lime','LawnGreen','Chartreuse','GreenYellow','SpringGreen','MediumSpringGreen','LightGreen','PaleGreen','DarkSeaGreen','MediumAquamarine','MediumSeaGreen','SeaGreen','ForestGreen','Green','DarkGreen','Aqua','Cyan','LightCyan','PaleTurquoise','Aquamarine','Turquoise','MediumTurquoise','DarkTurquoise','LightSeaGreen','CadetBlue','DarkCyan','Teal','LightSteelBlue','PowderBlue','LightBlue','SkyBlue','LightSkyBlue','DeepSkyBlue','DodgerBlue','CornflowerBlue','SteelBlue','RoyalBlue','Blue','MediumBlue','DarkBlue','Navy','MidnightBlue','Lavender','Thistle','Plum','Violet','Orchid','Fuchsia','Magenta','MediumOrchid','MediumPurple','BlueViolet','DarkViolet','DarkOrchid','DarkMagenta','Purple','Indigo','DarkSlateBlue','SlateBlue','MediumSlateBlue','White','Snow','Honeydew','MintCream','Azure','AliceBlue','GhostWhite','WhiteSmoke','Seashell','Beige','OldLace','FloralWhite','Ivory','AntiqueWhite','Linen','LavenderBlush','MistyRose','Gainsboro','LightGray','Silver','DarkGray','Gray','DimGray','LightSlateGray','SlateGray','DarkSlateGray','Black'];
document.write('<style>');
for(var i=0;i<nameColor.length;i++){
    document.write('.color'+nameColor[i]+'{');
    //document.write('    color:'+nameColor[i]+';');
    document.write('    color:black;');
    document.write('    border-color:'+nameColor[i]+';');
    document.write('}');
    document.write('.color'+nameColor[i]+':hover{');
    document.write('    background:'+nameColor[i]+';');
    document.write('    color: #fff;');
    document.write('    border-color:'+nameColor[i]+';');
    document.write('}');
}
document.write('</style>');

