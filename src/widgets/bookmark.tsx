import { LabelledTextInput } from "../components/LabelledTextInput";
import { SiteBookmarkWidget } from "../components/SiteBookmarkWidget";
import { WidgetType } from "../types";
import { useGridLayoutDispatch } from "./GridLayoutContext";
import { LabelledSlider } from "../components/Slider";

export const IconBookmarkWidget: WidgetType = {
  widgetCode: "iconBookmark",
  widgetName: "Site Bookmark",
  initialState: () => ({
    widgetCode: "iconBookmark",
    fontSize: 5,
    iconSize: 75,
    borderStyle: "none",
    bookmarkName: "",
    siteUrl: "",
  }),
  settingsForm: (widget) => {
    const dispatch = useGridLayoutDispatch();

    return (
      <>
        <LabelledTextInput
          label="Bookmark Name"
          value={widget.bookmarkName}
          onChange={(bookmarkName) => {
            dispatch({
              type: "UPDATE_WIDGET",
              payload: {
                ...widget,
                bookmarkName,
              },
            });
          }}
        />
        <LabelledTextInput
          label="Website URL"
          placeholder="https://www.google.com"
          value={widget.siteUrl}
          onChange={(siteUrl) => {
            // TODO: check if it contains 'https://' if not prepend it
            dispatch({
              type: "UPDATE_WIDGET",
              payload: {
                ...widget,
                siteUrl,
              },
            });
          }}
        />
        <LabelledSlider
          label="Icon Size"
          min={20}
          max={180}
          onChange={(iconSize) => {
            dispatch({
              type: "UPDATE_WIDGET",
              payload: { ...widget, iconSize },
            });
          }}
          currentValue={widget.iconSize}
        />
      </>
    );
  },
  renderWidget: (widget, tick, unlocked) => (
    <SiteBookmarkWidget
      siteUrl={widget.siteUrl}
      name={widget.bookmarkName}
      fontSize={widget.fontSize}
      iconSize={widget.iconSize}
      settingsOpen={unlocked}
    />
  ),
  preview: (widget) => (
    <div>
      <div style={{ fontSize: "25px" }}>Site Bookmark</div>
    </div>
  ),
};
