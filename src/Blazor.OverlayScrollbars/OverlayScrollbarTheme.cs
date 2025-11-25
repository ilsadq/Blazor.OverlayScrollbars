using System.Runtime.Serialization;

namespace Blazor.OverlayScrollbars;

public enum OverlayScrollbarTheme
{
    [EnumMember(Value = "os-theme-dark")] Dark,
    [EnumMember(Value = "os-theme-light")] Light,
    [EnumMember(Value = null)] None
}