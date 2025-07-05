const site = prompt('enter a website');
if (site.endsWith('.com')) alert(' domain extension of the site .com');
if (site.endsWith('.co.il')) alert(' domain extension of the site .co.il');
if (site.endsWith('.com')) document.write(`its a site ${site} is a International commercial website`);
else if (site.endsWith('.org')) document.write(`its a site ${site} is a International organizational (non-profit) website`);
else if (site.endsWith('.org.il')) document.write(`its a site ${site} is a Israeli organizational (non-profit) website`);
else if (site.endsWith('.co.il')) document.write(`its a site ${site} is a Israeli commercial website`);
else if (site.endsWith('.gov.il')) document.write(`its a site ${site} is a  Israeli government website`);
else document.write(`its a site ${site} is a  Other type of website`)


