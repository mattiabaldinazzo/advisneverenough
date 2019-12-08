function hideandshow(x)
{
  if (x==0)
    document.getElementById("toDisplay").style.display="none";
    //document.getElementById("toDisplay").style.visibility="hidden";
    //mantenere fisso il div
  else
    document.getElementById("toDisplay").style.display="block";
  return;
}
