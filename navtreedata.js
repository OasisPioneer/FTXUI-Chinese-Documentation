/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "FTXUI", "index.html", [
    [ "介绍", "index.html", "index" ],
    [ "入门", "getting-started.html", [
      [ "安装 FTXUI", "getting-started.html#安装-ftxui", null ],
      [ "最小示例", "getting-started.html#最小示例", null ],
      [ "启动模板", "getting-started.html#启动模板", null ]
    ] ],
    [ "安装", "installation.html", [
      [ "CMake", "installation_cmake.html", [
        [ "概述", "installation.html#概述", null ],
        [ "支持的方法", "installation.html#支持的方法", null ],
        [ "后续步骤", "installation.html#后续步骤", null ],
        [ "贡献", "installation.html#贡献", null ],
        [ "集成方法", "installation_cmake.html#集成方法", [
          [ "使用 FetchContent", "installation_cmake.html#使用-fetchcontent", null ],
          [ "使用 find_package", "installation_cmake.html#使用-find_package", null ],
          [ "使用 git submodule", "installation_cmake.html#使用-git-submodule", null ]
        ] ],
        [ "可选 CMake 标志", "installation_cmake.html#可选-cmake-标志", null ],
        [ "验证集成", "installation_cmake.html#验证集成", null ]
      ] ],
      [ "Bazel", "installation_bazel.html", null ],
      [ "Vcpkg", "installation_vcpkg.html", [
        [ "Vcpkg 包", "installation_vcpkg.html#vcpkg-包", null ],
        [ "使用 Vcpkg 安装 FTXUI", "installation_vcpkg.html#使用-vcpkg-安装-ftxui", null ],
        [ "配置您的构建系统。", "installation_vcpkg.html#配置您的构建系统", null ]
      ] ],
      [ "Conan", "installation_conan.html", null ],
      [ "手动安装", "installation_manual.html", null ],
      [ "Nix", "installation_nix.html", null ],
      [ "Debian/Ubuntu", "installation_debian.html", null ],
      [ "Arch Linux", "installation_arch.html", null ],
      [ "openSUSE", "installation_opensuse.html", null ],
      [ "XMake", "installation_xmake.html", null ]
    ] ],
    [ "ftxui", "ftxui.html", [
      [ "ftxui/screen", "ftxui.html#ftxuiscreen", null ],
      [ "ftxui/dom", "ftxui.html#ftxuidom", null ],
      [ "ftxui/component", "ftxui.html#ftxuicomponent", null ]
    ] ],
    [ "ftxui / screen", "module-screen.html", [
      [ "Screen", "module-screen.html#ftxuiscreen-1", null ],
      [ "Dimension", "module-screen.html#ftxuidimension", null ],
      [ "Pixel", "module-screen.html#ftxuipixel", null ],
      [ "Color", "module-screen.html#ftxuicolor", null ]
    ] ],
    [ "ftxui / dom", "module-dom.html", [
      [ "text", "module-dom.html#dom-text", null ],
      [ "vtext", "module-dom.html#dom-vtext", null ],
      [ "paragraph", "module-dom.html#dom-paragraph", null ],
      [ "border", "module-dom.html#dom-border", null ],
      [ "window", "module-dom.html#dom-window", null ],
      [ "separator", "module-dom.html#dom-separator", null ],
      [ "gauge", "module-dom.html#dom-gauge", null ],
      [ "graph", "module-dom.html#dom-graph", null ],
      [ "Colors", "module-dom.html#dom-colors", [
        [ "Palette16", "module-dom.html#dom-colors-palette-16", null ],
        [ "Palette256", "module-dom.html#dom-colors-palette-256", null ],
        [ "TrueColor", "module-dom.html#dom-colors-true-color", null ]
      ] ],
      [ "LinearGradient", "module-dom.html#dom-linear-gradient", null ],
      [ "Style", "module-dom.html#dom-style", null ],
      [ "Layout", "module-dom.html#dom-layout", null ],
      [ "Table", "module-dom.html#dom-table", null ],
      [ "Canvas", "module-dom.html#dom-canvas", null ],
      [ "Example", "module-dom-examples.html", null ]
    ] ],
    [ "ftxui / component", "module-component.html", [
      [ "Input", "module-component.html#component-input", [
        [ "过滤输入", "module-component.html#过滤输入", null ]
      ] ],
      [ "Menu", "module-component.html#component-menu", null ],
      [ "Toggle", "module-component.html#component-toggle", null ],
      [ "CheckBox", "module-component.html#component-checkbox", null ],
      [ "RadioBox", "module-component.html#component-radiobox", null ],
      [ "Dropdown", "module-component.html#component-dropdown", null ],
      [ "Slider", "module-component.html#component-slider", null ],
      [ "Renderer", "module-component.html#component-renderer", null ],
      [ "CatchEvent", "module-component.html#component-catchevent", null ],
      [ "Collapsible", "module-component.html#component-collapsible", null ],
      [ "Maybe", "module-component.html#component-maybe", null ],
      [ "Container", "module-component.html#component-container", [
        [ "Horizontal", "module-component.html#component-horizontal", null ],
        [ "Vertical", "module-component.html#component-vertical", null ],
        [ "Tab", "module-component.html#component-tab", null ]
      ] ],
      [ "ResizableSplit", "module-component.html#component-resizable-split", null ],
      [ "强制重绘帧。", "module-component.html#component-force-redraw", null ],
      [ "Example", "module-component-examples.html", null ]
    ] ],
    [ "C++20 模块", "cpp20-modules.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Reference", "topics.html", "topics" ],
    [ "Modules", "modules.html", [
      [ "Modules List", "modules.html", "modules_dup" ]
    ] ],
    [ "Namespace Members", "namespacemembers.html", [
      [ "All", "namespacemembers.html", "namespacemembers_dup" ],
      [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
      [ "Variables", "namespacemembers_vars.html", null ],
      [ "Typedefs", "namespacemembers_type.html", null ],
      [ "Enumerations", "namespacemembers_enum.html", null ],
      [ "Enumerator", "namespacemembers_eval.html", null ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"animation_8cpp.html",
"component_8hpp.html#a5ce41caeafc35dedc5c7da5347386e80",
"functions.html",
"group__component.html#ab9f757d5d67255f61e27950be4131be1",
"group__dom.html#ad626747e5e54412d0376ba870565dce6",
"group__screen.html#abd07c48f62cc507fafa2486a43130fcfa2f3df27b5ed05a3e040deec31c684003",
"hyperlink_8cpp.html",
"nested__screen_8cpp.html",
"string__internal_8hpp.html#a5a8ec19f52346e9aad9dbab9108b968aa876e36e8a85514e9c141b2aa3a7bfb5c"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';