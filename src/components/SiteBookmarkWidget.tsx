type SiteBookmarkWidgetProps = {
  siteUrl: string;
  name: string;
  fontSize: number;
  iconSize: number;
  settingsOpen: boolean;
};

export function SiteBookmarkWidget({ siteUrl, name, fontSize, iconSize, settingsOpen }: SiteBookmarkWidgetProps) {
  const openWebPage = () => {!settingsOpen && window.open(siteUrl, "_self")}

  const getFavicon = () => {
    if (siteUrl === "") 
      return "src/logos/bookmark.ico"
    return `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${siteUrl}&size=256`
  }

  return (
    <div>
      <img width={iconSize} height={iconSize} src={getFavicon()} alt="" onClick={() => openWebPage()} style={{cursor:'pointer'}}/>
      <br/>
      {name &&<span style={{
          fontSize: fontSize * 4 + "px",
          whiteSpace: "pre",
          lineHeight: "120%",
        }}>{name}</span>}
    </div>
  );
}
