
# Julia code examples {#Julia-code-examples}

**Fonts**

This package uses the JuliaMono font by default, but you can override this in CSS.

This is what some common symbols look like:

```julia
] [ = $ ; ( @ { " ) ? . } ⊽ ⊼ ⊻ ⊋ ⊊ ⊉ ⊈ ⊇ ⊆ ≥ ≤ ≢ ≡ ≠ ≉ ≈ ∪ ∩ ∜ ∛ √ ∘ ∌
|> /> ^ % ` ∈
```


## @example

The `Julia` code used here is done using the following packages versions:

**Input**

````
```@example version
using Pkg
Pkg.status()
```
````


**Output**

```julia
using Pkg
Pkg.status()
```


```
Status `~/work/DocumenterVitepress.jl/DocumenterVitepress.jl/docs/Project.toml`
  [e30172f5] Documenter v1.7.0
  [daee34ce] DocumenterCitations v1.3.3
  [4710194d] DocumenterVitepress v0.1.2 `~/work/DocumenterVitepress.jl/DocumenterVitepress.jl`
```


And a simple sum:

**Input**

````
```@example simple_sum
2 + 2
```
````


**Output**

```julia
2 + 2
```


```
4
```


## @ansi

**Input**

````
```@ansi
printstyled("this is my color"; color = :red)
```
````


**Output**

```julia
julia> printstyled("this is my color"; color = :red)
```

```ansi
[31mthis is my color[39m
```


A more colorful example from [documenter](https://documenter.juliadocs.org/stable/showcase/#Raw-ANSI-code-output):

**Input**

````
```@ansi
for color in 0:15
    print("\e[38;5;$color;48;5;$(color)m  ")
    print("\e[49m", lpad(color, 3), " ")
    color % 8 == 7 && println() # ‎[!code highlight]
end
```
````


**Output**

```julia
julia> for color in 0:15
           print("\e[38;5;$color;48;5;$(color)m  ")
           print("\e[49m", lpad(color, 3), " ")
           color % 8 == 7 && println() # [!code highlight]
       end
```

```ansi
[38;5;0;48;5;0m  [49m  0 [38;5;1;48;5;1m  [49m  1 [38;5;2;48;5;2m  [49m  2 [38;5;3;48;5;3m  [49m  3 [38;5;4;48;5;4m  [49m  4 [38;5;5;48;5;5m  [49m  5 [38;5;6;48;5;6m  [49m  6 [38;5;7;48;5;7m  [49m  7 
[38;5;8;48;5;8m  [49m  8 [38;5;9;48;5;9m  [49m  9 [38;5;10;48;5;10m  [49m 10 [38;5;11;48;5;11m  [49m 11 [38;5;12;48;5;12m  [49m 12 [38;5;13;48;5;13m  [49m 13 [38;5;14;48;5;14m  [49m 14 [38;5;15;48;5;15m  [49m 15
```


## @eval

From [Julia&#39;s documentation](https://docs.julialang.org/en/v1/) landing page.

**Input**

````
```@eval
io = IOBuffer()
release = isempty(VERSION.prerelease)
v = "$(VERSION.major).$(VERSION.minor)"
!release && (v = v*"-$(first(VERSION.prerelease))")
print(io, """
    # Julia $(v) Documentation

    Welcome to the documentation for Julia $(v).

    """)
if true # !release
    print(io,"""
        !!! warning "Work in progress!"
            This documentation is for an unreleased, in-development, version of Julia.
        """)
end
import Markdown
Markdown.parse(String(take!(io)))
```

```@eval
file = "julia-1.10.2.pdf"
url = "https://raw.githubusercontent.com/JuliaLang/docs.julialang.org/assets/$(file)"
import Markdown
Markdown.parse("""
!!! note
    The documentation is also available in PDF format: [$file]($url).
""")
```
````


**Output**

# Julia 1.10 Documentation

Welcome to the documentation for Julia 1.10.

::: warning Work in progress!

This documentation is for an unreleased, in-development, version of Julia.

:::

::: tip Note

The documentation is also available in PDF format: [julia-1.10.2.pdf](https://raw.githubusercontent.com/JuliaLang/docs.julialang.org/assets/julia-1.10.2.pdf).

:::

## @repl

**Input**

````
```@repl
a = 1;
b = 2;
a + b
```
````


**Output**

```julia
julia> a = 1;

julia> b = 2;

julia> a + b
3
```


**Input**

````
```@repl
a = 1;
b = 2; # [!code focus] # hide
a + b
```
````


**Output**

```julia
julia> a = 1;

julia> a + b
3
```


## @doctest

**Input**

````
```@doctest
julia> 1 + 1
2

```
````


**Output**

```julia
julia> 1 + 1
2

```

