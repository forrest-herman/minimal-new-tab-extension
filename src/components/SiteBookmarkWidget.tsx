type SiteBookmarkWidgetProps = {
  siteUrl: string;
  name: string;
  fontSize: number;
  iconSize: number;
  settingsOpen: boolean;
};

export function SiteBookmarkWidget({ siteUrl, name, fontSize, iconSize, settingsOpen }: SiteBookmarkWidgetProps) {
  const openWebPage = () => {!settingsOpen && window.open(siteUrl, "_self")}

  return (
    <div>
      <img width={iconSize} height={iconSize} src="src\logos\insta icon.png" alt="" onClick={() => openWebPage()} />
      <br/>
      {name &&<span style={{
          fontSize: fontSize * 4 + "px",
          whiteSpace: "pre",
          lineHeight: "120%",
        }}>{name}</span>}
    </div>
  );
}
