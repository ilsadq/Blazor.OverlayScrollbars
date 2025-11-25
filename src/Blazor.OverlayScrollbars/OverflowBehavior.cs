using System.Runtime.Serialization;

namespace Blazor.OverlayScrollbars;

public enum OverflowBehavior
{
    [EnumMember(Value = "hidden")] Hidden,
    [EnumMember(Value = "visible")] Visible,
    [EnumMember(Value = "scroll")] Scroll,
    [EnumMember(Value = "visible-hidden")] VisibleHidden,
    [EnumMember(Value = "visible-scroll")] VisibleScroll
}