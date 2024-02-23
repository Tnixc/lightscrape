//@ts-expect-error
import * as http from "http";

export async function downloadHtml(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

export function getTitle(html: string): string {
  let startIndex = html.indexOf("<title>");
  let endIndex = html.indexOf("</title>");
  let title = html.substring(startIndex + 7, endIndex);
  return title;
}

export function getReadNowLink(html: string, url: string): string {
  const lines = html.split("\n");
  const filteredLines = lines.filter(
    (line) => line.includes("readchapterbtn") || line.includes("Read Now")
  );
  let res = filteredLines
    .join("\n")
    .replace(/ *.*href="/, "")
    .replace(/".*/, "");
  if (res.startsWith("https://")) {
    return res;
  } else {
    return "https://" + url.split("/")[2] + res;
  }
}

export function getNextLink(html: string, url: string): string {
  const lines = html.split("\n");
  const filteredLines = lines.filter(
    (line) => line.includes('rel="next"')
  );
  let res = filteredLines[0]
    .replace(/ *.*href="/, "")
    .replace(/".*/, "");
  if (res.startsWith("https://")) {
    return res;
  } else {
    return "https://" + url.split("/")[2] + res;
  }
}

function parseContent(html: string): string {
  let divCount = 0;
  let start = false;
  let content = '';
  
  // Find the position of "itemprop=\"description\""
  let startIdx = html.indexOf('itemprop="description"');
  
  if (startIdx === -1) {
    return ''; // Return empty string if "itemprop=\"description\"" is not found
  }
  
  // Start capturing content after "itemprop=\"description\"" is found
  startIdx += 'itemprop="description"'.length;
  
  for (let i = startIdx; i < html.length; i++) {
    // Increase divCount for each opening div tag
    if (html.substring(i, i + 4) === '<div') {
      divCount++;
    }
    
    // Decrease divCount for each closing div tag
    if (html.substring(i, i + 6) === '</div>') {
      divCount--;
      
      // Stop capturing content when divCount is zero
      if (divCount === 0) {
        break;
      }
    }
    
    // Add the character to the content
    content += html[i];
  }
  
  return content;
}

console.log(parseContent(`
<!DOCTYPE html>
<html lang="en" theme="light" bgcolor="white" hgcolor="purple">
<head>
<meta charset="utf-8">
<title>Lord of the Mysteries - Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) - NovelFire</title>
<meta name="description" content="Read Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) - Lord of the Mysteries online now!">
<meta name="keywords" content="Read Lord of the Mysteries Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) online, novel Lord of the Mysteries Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) free, Lord of the Mysteries full chapter">
<meta name="copyright" content="Copyright © 2024 NovelFire">
<meta name="author" content="Novel 2024">
<meta name="robots" content="index,follow">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta property="og:site_name" content="NovelFire">
<meta property="og:type" content="novel">
<meta property="og:url" content="http://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">
<meta property="og:title" content="Lord of the Mysteries - Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) - NovelFire">
<meta property="og:description" content="Read Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) - Lord of the Mysteries online now!">
<meta property="og:image" content="https://roomnovel.com/server-1/lord-of-the-mysteries.jpg">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary">
<meta name="twitter:url" content="http://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">
<meta name="twitter:title" content="Lord of the Mysteries - Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) - NovelFire">
<meta name="twitter:description" content="Read Chapter 1432-END - 1432 Bonus Chapter: That Corner (2) - Lord of the Mysteries online now!">
<meta name="twitter:image" content="https://roomnovel.com/server-1/lord-of-the-mysteries.jpg">
<meta name="twitter:creator" content="NovelFire">
<meta name="csrf-token" content="6CHNFKDJBjkpCDOWnuqbFqGKVG6SQ921C6QHh39U">
<link rel="canonical" href="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">
<link rel="shortcut icon" href="https://roomnovel.com/logo.ico?v=2">
<link rel="apple-touch-icon" href="https://roomnovel.com/apple-touch-icon.png?v=2">
<link rel="preconnect" href="//fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="//fonts.googleapis.com" crossorigin>
<link rel="preload stylesheet" as="style" href="https://fonts.googleapis.com/css?family=Roboto:400,500,600,700|Nunito+Sans:400,500,600,700&display=swap" crossorigin onload="this.rel='stylesheet'">
<noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,600,700|Nunito+Sans:400,500,600,700&display=swap">
        </noscript>
<script type="application/ld+json">{ "@context" : "https://schema.org/","@type" : "Organization", "name":"NovelFire", "url":"https://roomnovel.com", "slogan": "Read Web Novels Online Free - NovelFire", "logo": "https://roomnovel.com/logo.svg" }</script> <script type="application/ld+json">{ "@context" : "https://schema.org/","@type" : "BreadcrumbList",
        "itemListElement":[
            [{"@type":"ListItem","position":1,"name":"Novel","item":"https://roomnovel.com/home"}],
            [{"@type":"ListItem","position":2,"name":"Lord of the Mysteries","item":"https://roomnovel.com/book/lord-of-the-mysteries"}],
            [{"@type":"ListItem","position":3,"name":"Chapter 1432-END - 1432 Bonus Chapter: That Corner (2)","item":"https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432"}]
        ] }</script> <link rel="stylesheet" type="text/css" href="https://roomnovel.com/frontend/css/navbar.min.css?ver=32">
<link rel="stylesheet" type="text/css" href="https://roomnovel.com/frontend/css/media-mobile.min.css?ver=32">
<link rel="stylesheet" type="text/css" media="screen and (min-width: 768px)" href="https://roomnovel.com/frontend/css/media-768.min.css?ver=32">
<link rel="stylesheet" type="text/css" media="screen and (min-width: 1024px)" href="https://roomnovel.com/frontend/css/media-1024.min.css?ver=32">
<link rel="stylesheet" type="text/css" media="screen and (min-width: 1270px)" href="https://roomnovel.com/frontend/css/media-1270.min.css?ver=32">
<link rel="stylesheet" type="text/css" href="https://roomnovel.com/frontend/css/fontello.css?ver=32">
<link rel="stylesheet" type="text/css" href="https://roomnovel.com/frontend/css/chapterpg.min.css?ver=32" />
<link rel="stylesheet" href="https://roomnovel.com/frontend/css/style.min.css?ver=32" type="text/css" media="all">
<script async data-cfasync="false" src="https://cdn.pubfuture-ad.com/v2/unit/pt.js" type="text/javascript"></script>
</head>
<body class="fade-out">
<header class="main-header skiptranslate">
<div class="wrapper">
<div class="nav-logo"><a title="Read Web Novels Online Free - NovelFire" href="https://roomnovel.com/home"><img src="https://roomnovel.com/logo.svg?v=2" alt="NovelFire"></a></div>
<div class="navigation-bar">
<nav>
<span class="lnw-slog fs-14">Your Fictional Stories Hub</span>
<ul class="navbar-menu">
<li class="nav-item"><a title="Search Novels" href="https://roomnovel.com/search" class="nav-link"><i class="icon-search"></i> Search</a></li>
<li class="nav-item"><a title="Explore The Recently Added Novels" href="https://roomnovel.com/genre-all/sort-new/status-all/all-novel" class="nav-link"><i class="icon-th-large"></i> Browse</a></li>
<li class="nav-item"><a title="Novel Ranking" href="https://roomnovel.com/monthly-rank" class="nav-link"><i class="icon-diamond"></i> Ranking</a></li>
<li class="nav-item"><a title="Check out the recently added novel chapters" href="https://roomnovel.com/latest-release-novels" class="nav-link"><i class="icon-book-open"></i> Updates</a></li>
<li class="nav-item"><a title="Explore All Novel Tags" href="https://roomnovel.com/all-tags/A" class="nav-link"><i><svg width="16" height="20" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16"><path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path><path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"></path></svg></i> Tags</a></li>
<li class="nav-item"><a title="Search Novels with Advanced Filtering Function" href="https://roomnovel.com/search-adv" class="nav-link"><i class="icon-filter"></i> Filter</a></li>
<li class="nav-item"><a title="Development Announcements" href="https://roomnovel.com/notices" class="nav-link"><i class="icon-megaphone"></i><span> DEV</span></a></li>
<li class="nav-item"><a class="nightmode_switch" data-tool="night" title="Dark Mode" data-night="0" data-content="Dark Theme"><i class="icon-moon"></i></a></li>
</ul>
</nav>
<div class="login-wrap-nav">
<a class="nav-link login button" href="#modal" data-close-menu-mobile="1">Login</a>
</div>
</div>
<div class="nav-back"></div>
<button id="mobile-menu-btn"><div id="burger-btn"></div></button>
<span class="nav notify-bell mobile-block icon-bell-alt"></span>
</div>
</header>
<div class="sidebar-wrapper"></div>
<main role="main">
<div class="navbar-breadcrumb">
<div class="breadcrumb show-dots container">
<a title="Read Web Novels Online Free - NovelFire" href="https://roomnovel.com/home"><svg class="svg-home" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg> Novel</a>
<svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
<a title="Lord of the Mysteries" href="https://roomnovel.com/book/lord-of-the-mysteries">Lord of the Mysteries</a>
<svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
<a title="Chapter 1432-END - 1432 Bonus Chapter: That Corner (2)" href="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">Chapter 1432-END - 1432 Bonus Chapter: That Corner (2)</a>
</div>
</div>
<svg aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden"><symbol id="i-set" viewBox="0 0 1027 1024"><path d="M1005.37728 614.4l-115.2-64c0-12.8 0-25.6 0-38.4s0-25.6 0-38.4l115.2-64C1024.57728 403.2 1030.97728 384 1018.17728 364.8l-128-224c-6.4-12.8-25.6-19.2-44.8-12.8l-115.2 64c-19.2-12.8-38.4-25.6-64-38.4l0-128C672.57728 12.8 659.77728 0 640.57728 0L384.57728 0C365.37728 0 352.57728 12.8 352.57728 32l0 128c-19.2 12.8-44.8 19.2-64 38.4l-115.2-64C160.57728 121.6 141.37728 128 134.97728 147.2l-128 224C-5.82272 384 0.57728 403.2 13.37728 409.6l115.2 64C128.57728 486.4 128.57728 499.2 128.57728 512s0 25.6 0 38.4l-115.2 64C0.57728 620.8-5.82272 640 6.97728 659.2l128 224c6.4 12.8 25.6 19.2 44.8 12.8l115.2-64c19.2 12.8 38.4 25.6 64 38.4l0 128C352.57728 1011.2 365.37728 1024 384.57728 1024l256 0c19.2 0 32-12.8 32-32l0-128c19.2-12.8 44.8-19.2 64-38.4l115.2 64c12.8 6.4 32 6.4 44.8-12.8l128-224C1030.97728 640 1024.57728 620.8 1005.37728 614.4zM838.97728 774.4l-115.2-70.4c-38.4 44.8-89.6 70.4-147.2 83.2l0 134.4L448.57728 921.6l0-134.4c-57.6-12.8-108.8-44.8-147.2-83.2l-115.2 70.4-64-108.8 115.2-70.4C230.97728 569.6 224.57728 544 224.57728 512s6.4-57.6 12.8-83.2L122.17728 358.4l64-108.8 115.2 70.4C339.77728 275.2 390.97728 243.2 448.57728 230.4L448.57728 96l128 0 0 134.4c57.6 12.8 108.8 44.8 147.2 83.2l115.2-70.4 64 108.8-115.2 70.4c6.4 25.6 12.8 57.6 12.8 83.2s-6.4 57.6-12.8 83.2l115.2 70.4L838.97728 774.4z"></path><path d="M512.57728 320C403.77728 320 320.57728 403.2 320.57728 512s83.2 192 192 192 192-83.2 192-192S621.37728 320 512.57728 320zM512.57728 640c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128S582.97728 640 512.57728 640z"></path></symbol></svg>
<article id="chapter-article" itemscope itemtype="https://schema.org/CreativeWorkSeries" itemid="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">
<section class="page-in content-wrap py-md-3 pt-0">
<div class="titles">
<meta itemprop="datePublished" content="2022-12-23T07:50:02">
<link itemprop="image" href="https://roomnovel.com/server-1/lord-of-the-mysteries.jpg">
<meta itemprop="url" content="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">
<h1 itemprop="headline"><a title="Lord of the Mysteries" href="https://roomnovel.com/book/lord-of-the-mysteries" class="booktitle" rel="up" itemprop="sameAs">Lord of the Mysteries</a><span hidden> - </span><br><span class="chapter-title">Chapter 1432-END - 1432 Bonus Chapter: That Corner (2)</span></h1>
<button id="control-action-btn" type="button"><svg><use xlink:href="#i-set"></use></svg></button>
</div>
<div class="clearfix chapternav skiptranslate">
<a title="Previous Chapter" rel="prev" class="button prevchap " href="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1431"><i class="icon-left-open"></i></a>
<div>
<select class="button chapindex select2 wrap pointer" name="chapter_id">
<option value="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">Chapter 1432-END - 1432 Bonus Chapter: That Corner (2)</option>
</select>
</div>
<a title="Next Chapter" rel="next" class="button nextchap  isDisabled " href="javascript:;"><i class="icon-right-open"></i></a>
</div>
<div id="chapter-container" class="d-chapter-content font_default">
<div id="pfvidad" class="video mUEpZVPr PTjSKReb _E-eJS_r">
<div id="pf-7266-1"><script>window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "65a781b5b2051a41f9172e45", id: "pf-7266-1"})</script></div>
</div>
<div id="content" class="clearfix" itemprop="description">
<p> 1432 Bonus Chapter: That Corner (2)
</p><p> Parvi shot him a glance.
</p><p> “People are missing!”
</p><p> “No, no, no, that’s not it. I know that.” Weimer shook his head seriously.
</p><p> His eyes lit up.
</p><p> “I know what’s missing!”
</p><p> “What?” Captain Gray and First Mate Ol’ Keaton asked in unison.
</p><p> Weimer laughed.
</p><p> “Money, notes, and gold coins!”
</p><p> He straightened his back and continued explaining, “Although we haven’t entered the houses to conduct a detailed search, according to my experience, even if we just look from the outside, we should be able to find some. However, there’s nothing at all!”
</p><p> “Perhaps it’s just that the people here aren’t very rich and don’t have the habit of leaving their money around.” Parvi didn’t agree.
</p><p> This was not an important problem. The four of them quickly diverted their attention. After entering the municipal square, they looked at the tallest building.
</p><p> It was a black-spired cathedral.
</p><p> Mushrooms tenaciously grew out of the cracks in the bricks of the cathedral. They were either simple and plain, or gorgeous and colorful. They strung together, showing a presence that couldn’t be ignored in front of the green vines.
</p><p> “This place feels like it’s been abandoned for even longer.” Parvi paused before saying, “From the architectural style, this looks like the cathedral of the Goddess. Do the people here also believe in the Goddess?”
</p><p> She found this rather peculiar.
</p><p> The residents of such a hidden island and strange town seem to believe in the Evernight Goddess…
</p><p> Ol’ Keaton stared at it for a few seconds before saying, “Seems so.”
</p><p> Then, he immediately added, “It feels like the closer we get to the square and the cathedral, the longer it appears to be abandoned.”
</p><p> Be it the weeds on the road, the green plants on the surface of the buildings, or the mushrooms of all kinds, the closer they got to the center of the town, the more numerous they became. And the cathedral seemed to be covered in a green coat with many speckled holes.
</p><p> After a moment of silence, Parvi suggested, “Let’s go to the cathedral. As long as the Goddess is still watching this land, there won’t be any particularly serious problems there.”
</p><p> Captain Gray and Ol’ Keaton didn’t object, but the former reiterated the rules of this exploration.
</p><p> “After entering the cathedral, you can only use your eyes to see and ears to hear. Don’t do anything else.”
</p><p> “No problem.” Weimer walked towards the cathedral at the side of the square.
</p><p> This left Parvi with no choice but to gesture a circle on her chest and simply ask for the Goddess’s protection.
</p><p> As there wasn’t much time left, the four of them sped up and quickly arrived at the cathedral’s entrance.
</p><p> They were in no hurry to push the door open and enter. They “sized up” their surroundings individually.
</p><p> “Very quiet,” Captain Gray concluded.
</p><p> The other three also expressed that they did not find any problems.
</p><p> The black cathedral’s door was ajar. After Weimer exerted force with his hands, it slowly opened.
</p><p> The bottom of Captain Gray’s black eye patch immediately lit up, helping him see the scene inside clearly.
</p><p> There were no tables or chairs in the hall. There were windows on both sides that shone with light, and it was dark red above.
</p><p> Drip, drip, drip. Drops of viscous, pale-yellow liquid fell from the sky and hit the ground like rain, giving people the feeling that the dome was severely damaged and was facing a storm.
</p><p> Before Gray could speak, he saw the viscous, disgusting liquid dissolve into puddles.
</p><p> The puddles rolled and bubbled endlessly.
</p><p> The bubbles popped, and deformed babies with moist skin and pale yellow dirt crawled out.
</p><p> As these babies grew rapidly, they dripped more viscous yellow liquid, creating more puddles and stirring more bubbles…
</p><p> “Waaa! Waaa! Waaa!”
</p><p> They began to cry.
</p><p> Just seeing this scene caused blood to flow from Gray’s eyes. The eye patch turned dark red as if he was moved to tears by the birth of life.
</p><p> His mind was blank. He felt that every part of his body was nurturing a new life.
</p><p> The sharp pain snapped him to his senses, and he instinctively took a step back.
</p><p> The scene in front of Gray returned to normal. It was still the empty cathedral hall with wide windows that lacked maintenance, and a tall and magnificent dome. There was no viscous liquid that fell like rain, nor were there countless deformed babies and puddles everywhere.
</p><p> “Huff, puff” Gray panted heavily.
</p><p> The next second, he turned around and shouted as he ran, “Run!”
</p><p> Thud thud thud! Gray rushed out of the municipal square.
</p><p> He did not care about Parvi, Ol’ Keaton, and Weimer at all.
</p><p> He was already considered a responsible captain for still remembering to warn his teammates under the current circumstances.
</p><p> Thud! Thud! Thud!
</p><p> Gray didn’t dare stop at all. Relying on his amazing physique despite his blurred vision, he ran all the way out of the strange town, back to the crude port, and onto his ship.
</p><p> Ol’ Keaton, Parvi, and Weimer rushed back in less than ten seconds.
</p><p> “Set sail!” Gray ordered.
</p><p> Gray waited until the ship set sail before he bothered to check his injuries. He raised a hand to his eye and instantly felt moisture.
</p><p> However, when he brought his hand to his eyes, he realized that it was not blood—just tears.
</p><p> As he ran, he kept crying.
</p><p> Grey’s brows knitted together, startled and suspicious.
</p><p> Soon, he confirmed that he was not injured at all.
</p><p> “What did you guys see?” He turned to look at Ol’ Keaton and the others.
</p><p> Weimer looked at the captain. His eyes were red as if he had just cried.
</p><p> He said with lingering fear, “I saw fireball after fireball.
</p><p> “They fell from the roof with a whoosh and then exploded!
</p><p> “Light. My eyes were filled with light. I felt like I was going blind. No, I’m already blind! Then, I felt like I was melting. It hurt. It really hurt.”
</p><p> Weimer heaved a sigh of relief.
</p><p> “Fortunately, Captain woke me up at that moment.”
</p><p> He rubbed his eyes and said in confusion and relief, “I’m fine now. It’s just that I kept crying at first, but then I got better. It was like a bad dream.”
</p><p> What he meant was that the dream was very real. There were still lingering fears when he woke up, but he would be fine after a while.
</p><p> Captain Gray nodded and carefully examined Weimer’s eyes.
</p><p> After confirming that there was really no problem, he looked at First Mate Ol’ Keaton.
</p><p> “What about you?”
</p><p> Ol’ Keaton looked at the distant coastline and the shrinking port and said in a reminiscent tone,
</p><p> “The entire cathedral collapsed. I fell to the ground with the surrounding pillars and stone bricks.
</p><p> “It was bottomless. Moreover, my head, my flesh, and my skin fell at different speeds. They began to pull at each other. It hurt, it really hurt…”
</p><p> The slightly loose skin and deep wrinkles on Ol’ Keaton’s face trembled as if he didn’t want to recall any more of the incident.
</p><p> He exhaled and said after a while,
</p><p> “My entire body was about to be torn apart. Then, it was as if there were invisible hands around me. They pressed my hands, legs, head, skin, flesh, and bones to my internal organs with great force…
</p><p> “I wished I could die as quickly as possible. Fortunately, I woke up the next second thanks to you, Captain.”
</p><p> Weimer sighed with emotion.
<z15e0>ʀᴇᴀᴅ ʟᴀᴛᴇsᴛ ᴄʜᴀᴘᴛᴇʀs ᴀᴛ novᴇl(ꜰ)ire.ɴet</z15e0></p><p> “This is even more painful than what happened to me. If you hadn’t woken up in time, you might have seen yourself turn into a blood-colored meatball.”
</p><p> Parvi listened quietly and said thankfully, “I wasn’t in that much pain.
</p><p> “I saw darkness—darkness that made me feel at ease.
</p><p> “Then, I fell asleep. It was like I was back in my bed until I was woken up by you, Captain.”
</p><p> Captain Gray nodded slowly.
</p><p> “From the looks of it, what we encountered or experienced is different. Moreover, we are left without any injuries.”
</p><p> “It’s just some stress.” Ol’ Keaton affirmed the captain’s statement.
</p><p> He then voiced his guess.
</p><p> “Perhaps we were under an illusion or hallucinated for some other reason. And because everyone has different personalities and experiences, what we saw and experienced were different.”
</p><p> Before Ol’ Keaton finished speaking, Parvi blurted out, “Mushrooms! Could it be those mushrooms? Those mushrooms were the strangest!”
</p><p> “Yes, definitely!” Weimer agreed after being momentarily taken aback.
</p><p> It was common knowledge that one could be poisoned and end up hallucinating after eating certain mushrooms. In such a strange place, it was reasonable for one to be affected just by approaching the mushrooms.
</p><p> Captain Gray seriously recalled for a moment and said, “That’s possible. There was a very faint, sweet smell in the air… The fragrance of some mushrooms?”
</p><p> …
</p><p> In the middle of a small town called Utopia, on the surface of the cathedral that was suspected to belong to the Church of Evernight, mushrooms suddenly became active.
</p><p> They squirmed and crazily spewed out large amounts of spores. Before the spores landed, they had already grown into different mushrooms in the air. Then, they continued to create more spores.
</p><p> And in the gap between the black bricks occupied by the mushrooms and green plants, pale-white, tiny, baby-like deformed palms squeezed out.
</p><p> Silently, the entire cathedral collapsed, and a bottomless pit appeared in the ground.
</p><p> The huge pit spread out, pulling the buildings over and shattering them into pieces.
</p><p> Elsewhere in the town, the large number of houses that had originally stood tall had long disappeared, leaving behind large pieces of colorful glass-like traces.
</p><p> In the depths of the ground, muffled sounds came one after another.
</p><p> In just a few seconds, the place had completely fallen silent.
</p><p> Buildings rose from the ground one after another, and the town quickly recovered as if it had a vitality of its own.
</p><p> The furnishings in the houses were almost the same as before, but there were certain differences in their details. What was left had switched to the right, and what was far became close.
</p><p> …
</p><p> Late at night, on the ship.
</p><p> Weimer, who could not sleep because of what happened during the day, came to the deck and breathed in the moist sea breeze.
</p><p> “You’re still awake?” He saw the boatswain, Parvi.
</p><p> Parvi was still wearing the clothes she wore during the day. She looked at the dark sea in the distance and said,
</p><p> “I was going to sleep, but I suddenly recalled some details after I closed my eyes.”
</p><p> “What details?” Weimer asked curiously.
</p><p> Parvi’s face reflected the red moonlight as she said, “There’s something else under the darkness I saw in the cathedral…”
</p><p> Without waiting for Weimer to ask, she muttered to herself dreamily,
</p><p> “There were many skeletons, some children’s and some babies’. Some of them were normal, while others looked like monsters. It was packed with them, everywhere.
</p><p> “Also, there seemed to be a raven hidden in the depths of the darkness.”</p>
<div class="alert-info py-2">
Follow this channel <a target="_blank" class="font-weight" href="https://t.me/novelfire" rel="noopener noreferrer">https://t.me/novelfire</a> on Telegram to discuss and get the latest notifications about new novels.
</div>
<p><em>This chapter upload first at <strong>NovelFire.net</strong>. Do you like this site? Donate here:</em></p>
<p class="text-center box-ads" style="height:50px"><a title="Donate" target="_blank" href="https://ko-fi.com/novelfire"><img src="https://roomnovel.com/bmc-button.png" style="width:auto;height:50px"></a></p>

</div>
<div class="chapternav skiptranslate pt-4 pb-3 clearfix">
<a title="Previous Chapter" rel="prev" class="button prevchap " href="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1431"><i class="icon-left-open"></i></a>
<div>
<select class="button chapindex select2 wrap pointer" name="chapter_id">
<option value="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432">Chapter 1432-END - 1432 Bonus Chapter: That Corner (2)</option>
</select>
</div>
<a title="Next Chapter" rel="next" class="button nextchap  isDisabled " href="javascript:;"><i class="icon-right-open"></i></a>
</div>
<div class="text-center box-notice">
<span class="d-pc-block d-mobile-hidden">Tip: You can use left, right keyboard keys to browse between chapters.</span>
<span class="d-pc-hidden d-mobile-block">Tap the middle of the screen to reveal Reading Options.</span>
</div>
<div class="report-container mt-3 mt-lg-1">
<p>Please report the problems you have identified regarding the novel and its chapters.</p>
<a id="novel-report" href="javascript:;">
<svg class="icon icon-pantool"><use xlink:href="#icon-pantool"></use></svg>
<span>Report</span>
</a>
</div>
<div id="chapter-comments">
<div id="disqus_thread"></div>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</div>
</div>
<dialog class="mobile-title-bar">
<div class="bar-body">
<i class="bar-nav-back">
<svg viewBox="0 0 24 24" fill="none" width="30" height="30">
<path d="M6.975 13.3L12 20H9l-6-8 6-8h3l-5.025 6.7H21v2.6H6.975z"></path>
</svg>
</i>
<div class="bar-titles">
<a title="Lord of the Mysteries" href="https://roomnovel.com/book/lord-of-the-mysteries" class="booktitle text1row">Lord of the Mysteries</a>
</div>
</div>
</dialog>
<dialog class="control-action" translate="no">
<nav class="action-items">
<div class="head-bar">
<div class="title">Chapter 1432-END - 1432 Bonus Chapter: That Corner (2)</div>
<button class="action-close" type="button"><i class="icon-cancel-1"></i></button>
</div>
<div class="action-select">
<a rel="prev" class=" chnav prev" href="https://roomnovel.com/book/lord-of-the-mysteries/chapter-1431"><i class="icon-left-open"></i></a>
<a class="nightmode_switch" title="Night mode" data-night="0"><i class="icon-moon"></i></a>
<a rel="next" class=" isDisabled  chnav next" href="javascript:;"><i class="icon-right-open"></i></a>
</div>
<div class="font-select">
<div class="font-wrap">
<input type="radio" id="radioDefault" name="radioFont" value="default" checked>
<label for="radioDefault">Default</label>
<input type="radio" id="radioDyslexic" name="radioFont" value="dyslexic">
<label for="radioDyslexic">Dyslexic</label>
<input type="radio" id="radioRoboto" name="radioFont" value="roboto">
<label for="radioRoboto">Roboto</label>
<input type="radio" id="radioLora" name="radioFont" value="lora">
<label for="radioLora">Lora</label>
</div>
</div>
<div class="action-select range-slider">
<span class="svgbtn pointer" id="svgFontMinus">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.333 21l-1.703-4.6H5.37L3.667 21H1L7.667 3h2.666L17 21h-2.667zM9 6.6l2.74 7.4H6.26L9 6.6zM23 5h-8v2h8V5z" fill="#000"></path>
</svg>
</span>
<div class="range-fontsize">
<div class="range">
<input type="range" min="1" max="8" step="1" value="1">
</div>
<ul class="range-labels">
<li>14</li>
<li>16</li>
<li class="active selected">18</li>
<li>20</li>
<li>22</li>
<li>24</li>
<li>26</li>
<li>28</li>
</ul>
</div>
<span class="svgbtn pointer" id="svgFontPlus">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 2v3h3v2h-3v3h-2V7h-3V5h3V2h2zm-5.667 19l-1.703-4.6H5.37L3.667 21H1L7.667 3h2.666L17 21h-2.667zM9 6.6l2.74 7.4H6.26L9 6.6z" fill="#000"></path>
</svg>
</span>
</div>
<div class="lang-select">
<select id="langselector" class="language-combo w-100">
<option value="en" selected>English</option>
<option value="ar">Arabic</option>
<option value="zh-CN">Chinese (Simplified)</option>
<option value="da">Danish</option>
<option value="nl">Dutch</option>
<option value="tl">Filipino</option>
<option value="fr">French</option>
<option value="de">German</option>
<option value="hi">Hindi</option>
<option value="hu">Hungarian</option>
<option value="id">Indonesian</option>
<option value="it">Italian</option>
<option value="ja">Japanese</option>
<option value="ko">Korean</option>
<option value="pl">Polish</option>
<option value="pt">Portuguese</option>
<option value="ru">Russian</option>
<option value="es">Spanish</option>
<option value="sv">Swedish</option>
<option value="th">Thai</option>
<option value="tr">Turkish</option>
<option value="uk">Ukrainian</option>
<option value="vi">Vietnamese</option>
</select>
<a id="langselbtn" href="javascript:;">Select Lang</a>
</div>
<div id="ttspanel">
<button id="ttsstart"><i class="icon-play"></i></button>
<button disabled id="ttsstop"><i class="icon-stop"></i></button>
<select id="tts-rate" name="tts-rate"></select>
<div class="select-wrap">
<select id="tts-voices" name="voices"><option data-lang="en-US" data-name="Microsoft David - English (United States)">Microsoft David - English (United States)</option><option data-lang="en-US" data-name="Microsoft Mark - English (United States)">Microsoft Mark - English (United States)</option><option data-lang="en-US" data-name="Microsoft Zira - English (United States)">Microsoft Zira - English (United States)</option><option data-lang="en-US" data-name="Google US English">Google US English</option><option data-lang="en-GB" data-name="Google UK English Female">Google UK English Female</option><option data-lang="en-GB" data-name="Google UK English Male">Google UK English Male</option></select>
</div>
</div>
</nav>
</dialog>
</section>
</article>
<div class="container mb-3"><div id="fb-root"></div>
<div class="alert-info text-center pb-4 pt-3 fs-17 my-3">
<div class="pb-3"><i>Follow this page <b>Novel Fire</b> on Facebook to discuss and get the latest notifications about new novels</i></div>
<div class="fb-page" data-href="https://www.facebook.com/ReadNovelDaily" data-tabs="tabs" data-width data-height data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ReadNovelDaily" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ReadNovelDaily">Read Novel Daily</a></blockquote></div>
</div>
</div>
</main>
<footer>
<div class="wrapper skiptranslate">
<div class="w-100">
<div class="col-ft-1">
<div class="logo text-center">
<a title="Read Web Novels Online Free - NovelFire" href="https://roomnovel.com/home" style="display:inline-block"><img class="lazy footer-logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://roomnovel.com/logo.svg?v=2" alt="NovelFire"></a>
</div>
</div>
<div class="col-ft-4 mt-0 mt-lg-3 mb-3 mb-lg-0">
<div><strong>NovelFire.net</strong> is created in hopes that every novel fan can get to read novel without paying a dime, this site is completely free of charge. To read novel online for free, all you need to do is to visit NovelFire, search for the novel you want to watch, and enjoy reading it at no cost and with no risk.</div>
</div>
<div class="col-ft-2 mb-3 mb-lg-0">
<h5>Userful links</h5>
<nav class="links">
<ul>
<li><a title="Explore The Recently Added Novels" href="https://roomnovel.com/genre-all/sort-new/status-all/all-novel" class="link-default">Latest Novels</a></li>
<li><a title="Check out the recently added novel chapters" href="https://roomnovel.com/latest-release-novels" class="link-default">Latest Release Novels</a></li>
<li><a title="Completed Novels" href="https://roomnovel.com/genre-all/sort-new/status-completed/all-novel" class="link-default">Completed Novels</a></li>
<li><a title="Novels Ranking" href="https://roomnovel.com/monthly-rank" class="link-default">Novels Ranking</a></li>
<li><a title="Explore The Recently Added Wuxia Novels" href="https://roomnovel.com/genre-wuxia/sort-new/status-all/all-novel" class="link-default">Wuxia</a></li>
<li><a title="Explore The Recently Added Fantasy Novels" href="https://roomnovel.com/genre-fantasy/sort-new/status-all/all-novel" class="link-default">Fantasy</a></li>
</ul>
</nav>
</div>
<div class="col-ft-2 mb-3 mb-lg-0">
<h5>Page</h5>
<nav class="links">
<ul>
<li><a title="Privacy Policy" href="https://roomnovel.com/page/privacy-policy" class="link-default">Privacy Policy</a></li>
<li><a title="Terms of Service" href="https://roomnovel.com/page/terms-of-service" class="link-default">Terms of Service</a></li>
<li><a title="Contact Us" href="/cdn-cgi/l/email-protection#ddb4b3bbb2f3afb8bcb9b3b2abb8b1b9bcb4b1a49dbab0bcb4b1f3beb2b0" class="link-default">Contact Us</a></li>
<li><a title="Sitemap" href="https://roomnovel.com/sitemap.xml" target="_blank" class="link-default">Sitemap</a></li>
</ul>
</nav>
</div>
</div>
<div class="clearfix copyright py-2 w-100">
<p class="text-center">© Copyright NovelFire. All Rights Reserved</p>
</div>
</div>
</footer>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="https://roomnovel.com/frontend/js/js.cookie.min.js?ver=32" crossorigin="anonymous"></script>
<script src="https://roomnovel.com/frontend/js/jquery.min.js?ver=32"></script>
<script src="https://roomnovel.com/frontend/js/appsettings.min.js?ver=32"></script>
<script src="https://roomnovel.com/frontend/js/app.min.js?ver=32"></script>
<div class="ajax_waiting"></div>
<a id="back-to-top" href="#"><svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="bi bi-arrow-up-short" style="color: rgb(255, 255, 255);"><path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"></path></svg></a>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0" id="__SVG_SPRITE_NODE__"><symbol id="i-times" viewBox="0 0 1024 1024"><path d="M618.775 512l320.329-320.329c30.51-30.51 30.51-76.269 0-106.775s-76.269-30.51-106.775 0l-320.329 320.329-320.329-320.329c-30.51-30.51-76.269-30.51-106.775 0s-30.51 76.269 0 106.775l320.329 320.329-320.329 320.329c-30.51 30.51-30.51 76.269 0 106.775s76.269 30.51 106.775 0l320.329-320.329 320.329 320.329c30.51 30.51 76.269 30.51 106.775 0s30.51-76.269 0-106.775l-320.329-320.329z"></path></symbol><symbol id="icon-pantool" viewBox="0 0 24 24"><path d="M21.5 4c-.83 0-1.5.67-1.5 1.5v5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-8c0-.83-.67-1.5-1.5-1.5S16 1.67 16 2.5v8c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.83-.67-1.5-1.5-1.5S12 .67 12 1.5v8.99c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.5c0-.83-.67-1.5-1.5-1.5S8 3.67 8 4.5v11.41l-4.12-2.35c-.58-.33-1.3-.24-1.78.22-.6.58-.62 1.54-.03 2.13l6.78 6.89c.75.77 1.77 1.2 2.85 1.2H19c2.21 0 4-1.79 4-4V5.5c0-.83-.67-1.5-1.5-1.5z"></path></symbol></svg>
<div id="modal" class="popupContainer" style="display:none;">
<header class="popupHeader">
<span class="header_title">Login</span>
<span class="modal_close"><svg><use xlink:href="#i-times"></use></svg></span>
</header>
<section class="popupBody">
<div class="social_login">
<div class="notification"></div>
<div>
<a href="https://roomnovel.com/auth/redirect/google" class="social_box google">
<span class="icon"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://roomnovel.com/frontend/images/google.svg" alt="Login with Google"></span>
<span class="icon_title">Login with Google</span>
</a>
</div>
<div class="centeredText">
<span>Or, use my email address</span>
</div>
<div class="action_btns">
<div class="one_half"><a href="#" id="login_form" class="button btn-modal">Login</a></div>
<div class="one_half last"><a href="#" id="register_form" class="button btn-modal">Sign Up</a></div>
</div>
</div>
<div class="user_login">
<form>
<label>Email</label>
<input type="email">
<div class="alert alert-email"></div>
<label>Password</label>
<input type="password">
<div class="alert alert-password"></div>
<div class="checkbox" style="display:flex">
<input id="remember" type="checkbox">
<label for="remember">Remember Me</label>
<label style="margin-left:auto">
<a href="#" id="forgot_password" class="forgot_password">Forgot Password?</a>
</label>
</div>
<div id="g-recaptcha-signin"></div>
<div class="alert alert-captcha"></div>
<div class="action_btns">
<div class="one_half"><a href="#" class="button btn-modal back_btn"><i class="icon-left-big"></i> Back</a></div>
<div class="one_half last"><a href="#" class="button btn-modal" onclick="loginAjax()">Login</a></div>
</div>
</form>
</div>
<div class="user_register">
<form>
<label>Email</label><input type="email"><div class="alert alert-email"></div>
<label>Username</label><input type="text"><div class="alert alert-name"></div>
<label>Password</label><input type="password"><div class="alert alert-password"></div>
<label>Confirm Password</label><input type="password" name="confirm-password"><div class="alert alert-confirm-password"></div>
<div id="g-recaptcha-signup"></div><div class="alert alert-captcha"></div>
<div class="action_btns">
<div class="one_half"><a href="#" class="button btn-modal back_btn"><i class="icon-left-big"></i> Back</a></div>
<div class="one_half last"><a href="#" class="button btn-modal" onclick="registerAjax()">Sign Up</a></div>
</div>
</form>
</div>
<div class="user_forgot_password">
<form>
<div class="pb-2">
<p style="padding-bottom: 10px">Enter your email address that you used to register. We'll send you an email with a link to reset your password.</p>
<p><i>If you don’t see the email, check other places it might be, like your junk, spam, social, or other folders.</i></p>
</div>
<input type="email" placeholder="Email">
<div class="alert alert-email"></div>
<div id="g-recaptcha-forgot-password"></div>
<div class="alert alert-captcha"></div>
<div class="action_btns">
<div class="one_half"><a href="#" class="button btn-modal back_btn_from_forgot_password"><i class="icon-left-big"></i> Back</a></div>
<div class="one_half last"><a href="#" class="button btn-modal" onclick="codePasswordResetAjax()">Send</a></div>
</div>
</form>
</div>
<div class="form_alert">
<form><div class="alert"></div></form>
</div>
</section>
</div>
<script src="https://roomnovel.com/frontend/js/modal.min.js?ver=32"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8GNE8RYCJ0"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8GNE8RYCJ0');
</script> <script async src="https://roomnovel.com/frontend/js/chaptertts.min.js?ver=32"></script>
<script src="https://roomnovel.com/frontend/js/chap-google-translate.min.js?ver=32"></script>
<script data-ignore="true" async type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=lnclient.chapgoogletranslate.translateCallback"></script>
<script>
            // $("#content p:nth-child(15)").after('<div id="pf-7751-1" class="text-center box-ads py-1"><script>window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "65d2fd5653b1797034a4cf66", id: "pf-7751-1"})<\/script></div>');
            // $("#content p:nth-child(30)").after('<div id="pf-7750-1" class="text-center box-ads py-1"><script>window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "65d2fd0f53b1797034a4ce3e", id: "pf-7750-1"})<\/script></div>');
            // $("#content p:nth-child(40)").after('<div id="pf-7015-1" class="text-center box-ads py-1"><script>window.pubfuturetag = window.pubfuturetag || [];window.pubfuturetag.push({unit: "658b9fde7f0baa003e16db27", id: "pf-7015-1"})<\/script></div>');
            setTimeout(function () {
                $('#content z15e0').remove();
            },3000);
            load_comment = false;
            var disqus_config = function () {
                this.page.url = 'https://roomnovel.com/book/lord-of-the-mysteries/chapter-1432';
                this.page.identifier = '58969266';
            };
            $(window).scroll(function() {
                if (load_comment == false) {
                    var hT = $('.report-container').offset().top,
                        hH = $('.report-container').outerHeight(),
                        wH = $(window).height(),
                        wS = $(this).scrollTop();

                    if (wS + 150 > (hT+hH-wH)){
                        load_comment = true;
                        (function() {
                            var d = document, s = d.createElement('script');
                            s.src = 'https://read-novel-daily.disqus.com/embed.js';
                            s.setAttribute('data-timestamp', +new Date());
                            (d.head || d.body).appendChild(s);

                            const myInterval = setInterval(() => {
                                if ($('#disqus_thread iframe[sandbox]').length > 0) {
                                    $.each($('#disqus_thread iframe[sandbox]'), (arr,x) => {
                                        $(x).remove();
                                    });
                                    clearInterval(myInterval);
                                }
                            }, 100);
                        })()
                    }
                }
            });

            chapter_id = parseInt("58969266");
            post_id = parseInt("229");

            $('select').on('select2:open', function() {
                $('.select2-search__field').attr('placeholder', 'Search...');
                // $('.select2-search__field').prop('focus', false);
                var height_screen = $(window).height();
                var height_criterion = height_screen - height_screen*(35/100);
                $('.select2-results__options').css('max-height', parseInt(height_criterion - 50) + 'px')
            });

            $("select[name=chapter_id]").click(function () {
                var _self = $(this);
                $(_self).html("<option>loading...</option>");
                $('<link/>', {rel: "stylesheet", type: "text/css", href: "https://roomnovel.com/frontend/css/select2.min.css?ver=32"}).appendTo('head');

                $.when(
                    $.getScript("https://roomnovel.com/frontend/js/select2.min.js?ver=32"),
                    $.Deferred(function( deferred ){
                        $( deferred.resolve );
                    })
                ).done(function(){
                    var n_option = $(_self).children('option').length;

                    if (n_option == 1) {
                        $.ajax({
                            method: "POST",
                            url: 'https://roomnovel.com/ajax/getListChapterById',
                            data: { post_id: post_id, _token:$('meta[name="csrf-token"]').attr('content') },
                            dataType: 'json',
                            success: function (response) {
                                $(_self).html(response.html);
                                $(_self).select2({width: '100%', dropdownCssClass : 'bigdrop'})
                                $(_self).val(chapter_id).trigger('change');
                                $(_self).select2('open')
                                $('.select2-search input').prop('focus',true);
                                $(_self).blur();
                            },
                        });
                    }
                });
            });

                            $(document).ready(function(){
                    if (typeof Cookies.get('notification-login') === 'undefined') {
                        setTimeout(function() {
                            $('.social_login .notification').html('<div class="alert alert-info fade in show">Please log in to use features such as saving the novel you are reading and saving your reading position.</div>')
                            $('a.login').trigger('click');
                            Cookies.set('notification-login', '1', { expires: 0.5 })
                        }, 20000);
                    }
                });
            
            $("select[name=chapter_id]").change(function () {
                if ($(this).find(":selected").val() != chapter_id) {
                    
                    var n_sort = $(this).find(":selected").data('n_sort');
                    location.href = 'https://roomnovel.com/book/lord-of-the-mysteries/chapter-' + n_sort;
                }
            })
        </script>
<script>
        window.onscroll = function() {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=3339256753013270&autoLogAppEvents=1";
            $("body").append(s);
        };
    </script>
</body>
</html>
`)

)