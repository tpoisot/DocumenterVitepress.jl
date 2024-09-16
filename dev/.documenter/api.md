---
outline: deep
---


## Public API {#Public-API}


<div class='jldocstring custom-block'>
<p class='custom-block-title'><a id='DocumenterVitepress.DocumenterVitepress' href='#DocumenterVitepress.DocumenterVitepress'>#</a>&nbsp;<b><u>DocumenterVitepress.DocumenterVitepress</u></b> &mdash; <i>Module</i></p>




```julia
DocumenterVitepress
```


Similar to DocumentationMarkdown.jl but designed to work with [vitepress](https://vitepress.dev/).


[source](https://github.com/tpoisot/DocumenterVitepress.jl/blob/c1f12af4aac33ece8c625b3f152dee5649b71054/src/DocumenterVitepress.jl#L1-L6)

</div>
<br>
<div class='jldocstring custom-block'>
<p class='custom-block-title'><a id='DocumenterVitepress.MarkdownVitepress' href='#DocumenterVitepress.MarkdownVitepress'>#</a>&nbsp;<b><u>DocumenterVitepress.MarkdownVitepress</u></b> &mdash; <i>Type</i></p>




```julia
MarkdownVitepress(; repo, devbranch, devurl, kwargs...)
```


This is the main entry point for the Vitepress Markdown writer.  

It is a config which can be passed to the `format` keyword argument in `Documenter.makedocs`, and causes it to emit a Vitepress site.

::: tip Quick start

When invoking `Documenter.makedocs`, replace the default `format=Documenter.HTML(...)` with:

```julia
format=DocumenterVitepress.MarkdownVitepress(; repo = "...", devbranch = "...", devurl = "...")
```


:::

**Keyword arguments (config)**
- `repo`: _Required_: The full URL of the repository to which the documentation will be deployed.
  
- `devbranch`: The name of the development branch, like `master` or `main`.
  
- `devurl`: The URL path to the development site, like `dev` or `dev-branch`.
  
- `deploy_url`: The URL of the repository to which the documentation will be deployed. This **must** be the full URL, **including `https://`**, like `https://rafaqz.github.io/Rasters.jl` or `https://geo.makie.jl/`.
  
- `description`: A description of the website as a String.
  
- `build_vitepress`: Determines whether to build the Vitepress site or only emit markdown files.  Defaults to `true`, i.e., building the full Vitepress site.
  
- `install_npm`: Determines whether to run `npm install` before building the Vitepress site.  Defaults to `true`.
  
- `md_output_path`: The path to which the Markdown files will be output.  Defaults to `$build/.documenter`.
  
- `clean_md_output`: Determines whether to clean up the Markdown assets after build, i.e., whether to remove the contents of `md_output_path` after the Vitepress site is built. Options are:
  - `nothing`: **Default**.  Only remove the contents of `md_output_path` if the documentation will deploy, to save space.
    
  - `true`: Removes the contents of `md_output_path` after the Vitepress site is built.
    
  - `false`: Does not remove the contents of `md_output_path` after the Vitepress site is built.
    
  
- `deploy_decision`: DeployDecision from Documenter.jl. This is used to determine whether to deploy the documentation or not. Options are:
  - `nothing`: **Default**. Automatically determine whether to deploy the documentation.
    
  - `Documenter.DeployDecision`: Override the automatic decision and deploy based on the passed config.
    
  It might be useful to use the latter if DocumenterVitepress fails to deploy automatically. You can pass a manually constructed `Documenter.DeployDecision` struct, or the output of `Documenter.deploy_folder(Documenter.auto_detect_deploy_system(); repo, devbranch, devurl, push_preview)`.
  
- `assets`: A list of assets, the same as what is provided to Documenter&#39;s HTMLWriter.
  

**Extended help**

The `repo` kwarg is used to set the edit link for the documentation.

The `devbranch` and `devurl` kwargs are used to set the path of the static site, which Vitepress expects in advance.


[source](https://github.com/tpoisot/DocumenterVitepress.jl/blob/c1f12af4aac33ece8c625b3f152dee5649b71054/src/writer.jl#L9-L30)

</div>
<br>

See e.g. [`DocumenterVitepress.DocumenterVitepress`](/api#DocumenterVitepress.DocumenterVitepress)
