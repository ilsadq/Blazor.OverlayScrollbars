using System.Runtime.Serialization;

namespace Blazor.OverlayScrollbars;

public enum ScrollbarVisibility
{
    [EnumMember(Value = "auto")] Auto,
    [EnumMember(Value = "visible")] Visible,
    [EnumMember(Value = "hidden")] Hidden
}