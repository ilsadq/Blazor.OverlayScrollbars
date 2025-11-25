using System.Runtime.Serialization;

namespace Blazor.OverlayScrollbars;

public enum AutoHideBehavior
{
    [EnumMember(Value = "never")] Never,
    [EnumMember(Value = "scroll")] Scroll,
    [EnumMember(Value = "leave")] Leave,
    [EnumMember(Value = "move")] Move
}