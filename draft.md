<div class="tag-cloud">
    <h3>Tag Cloud</h3>
    <ul>
    {{ $tags := .Site.Taxonomies.tags }}
    {{ $tagCounts := slice }}
    
    {{ range $tag, $pages := $tags }}
        {{ $tagCounts = $tagCounts | append (dict "name" $tag "count" (len $pages)) }}
    {{ end }}

    {{ $sortedTags := sort $tagCounts "count" "desc" }}

    {{ range $sortedTags }}
        <li><a href="{{ "/tags/" | relURL }}{{ .name | urlize }}">{{ .name }}</a> ({{ .count }})</li>
    {{ end }}
    </ul>
</div>


{{ define "main" }}
  <h1>📌 My Projects & Notes</h1>

  {{ $status_order := dict "important" 1 "active" 2 "success" 3 "in-progress" 4 "plan" 5 "draft" 6 "finished" 7 }}

  <!-- Inisialisasi array kosong untuk Projects dan Notes -->
  {{ $.Scratch.Set "projectPages" slice }}
  {{ $.Scratch.Set "notePages" slice }}

  {{ range where .Site.RegularPages "Params.groups" "Projects" }}
      {{ $order := index $status_order (lower .Params.status) | default 99 }}
      {{ $.Scratch.Add "projectPages" (dict "order" $order "page" .) }}
  {{ end }}

  {{ range where .Site.RegularPages "Params.groups" "notes" }}
      {{ $order := index $status_order (lower .Params.status) | default 99 }}
      {{ $.Scratch.Add "notePages" (dict "order" $order "page" .) }}
  {{ end }}

  {{ $sortedProjects := sort ($.Scratch.Get "projectPages") "order" }}
  {{ $sortedNotes := sort ($.Scratch.Get "notePages") "order" }}

  <!-- Tampilkan Projects -->
  <h2>🚀 Projects</h2>
  <div class="cards">
    {{ range $sortedProjects }}
      <div class="card">
        <h3><a href="{{ .page.RelPermalink }}">{{ .page.Title }}</a></h3>
        <p>Status: <strong>{{ .page.Params.status }}</strong></p>
        <p>{{ .page.Params.description | default "No description available." }}</p>
      </div>
    {{ end }}
  </div>

  <!-- Tampilkan Notes -->
  <h2>📝 Notes</h2>
  <div class="cards">
    {{ range $sortedNotes }}
      <div class="card">
        <h3><a href="{{ .page.RelPermalink }}">{{ .page.Title }}</a></h3>
        <p>Status: <strong>{{ .page.Params.status }}</strong></p>
        <p>{{ .page.Params.description | default "No description available." }}</p>
      </div>
    {{ end }}
  </div>

{{ end }}



<img src="https://github.com/masputrawae.png" alt="">
  <div id="github-repos">Loading...</div>
  <div id="github-calendar">Loading contributions...</div>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-calendar/dist/github-calendar-responsive.css">
  <script src="https://cdn.jsdelivr.net/npm/github-calendar@latest/dist/github-calendar.min.js"></script>
  <script>
    GitHubCalendar("#github-calendar", "masputrawae", {
      responsive: true,
      global_stats: true,
      tooltips: true
    });
  </script>
  
<script>
  const username = "masputrawae";
  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
  .then(response => response.json())
  .then(repos => {
    let repoList = "<ul>";
    repos.forEach(repo => {
      repoList += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}</li>`;
    });
    repoList += "</ul>";
    document.getElementById("github-repos").innerHTML = repoList;
  })
  .catch(error => console.error("Error:", error));
</script>


```scss
.sidebar {
    z-index: 10;
    background-color: var(--bg-default);
    padding: 0 var(--size-2);
    overflow-y: auto;
    
    &__button {
        @include m.width-height(30px, 30px);
        @include m.inset-shadow;
        border-radius: var(--size-1);
        font-size: var(--fs-xl);
        border: var(--border-1) solid var(--cl-border);
    }

    &__title {
        font-family: var(--font-title);
        color: var(--cl-primary);
        font-size: var(--fs-7xl);
        transition: color 0.3s ease-in-out;

        &:hover {
            color: var(--cl-secondary);
            text-decoration: none;
        }

        &--small {
            font-size: var(--fs-body);
        }
    }

    &__header {
        @include m.sticky-top;
        padding-top: var(--size-2);
        padding-bottom: var(--size-2);

        background-color: var(--bg-default);
        z-index: 5;
        max-height: 6rem;
        border-bottom: var(--border-1) solid var(--cl-border);
    }
    
    &__header-container {
        @include m.flex-justify();
    }

    &__action {
        @include m.flex-justify();
    }

    &__form {
        @include m.flex-justify();
        margin-top: var(--size-2);
    }

    &__input {
        @include m.width-height(85%, 28px);
        @include m.inset-shadow;
        background-color: var(--bg-primary);
        border: var(--border-1) solid var(--cl-border);
        padding: var(--size-2);
        color: var(--cl-text);
        border-radius: var(--size-1);
        transition: border-color 0.3s ease-in-out;
        
        &:focus {
            border-color: var(--status-focus);
            outline: none;
        }

        &:hover {
            border-color: var(--status-active);
        }
    }

    &--left {
        border-right: var(--border-1) solid var(--cl-border);
    }
    
    &--right {
        overflow: hidden;
    }
}

.menu-left {
    @extend %tree-style-list;
    margin-top: var(--size-2);
    margin-bottom: var(--size-5);

    &__button {
        text-align: start;
        width: 100%;
    }

    &__list--collapse {
        display: none;
    
        &.collapsed {
            display: block;
         }
    }
}

.menu-right {
    height: 100dvh;

    &__list {
        @include m.inset-shadow;
        list-style: none;
        padding: var(--size-2);
        overflow-y: auto;
        max-height: 40%;
        border: var(--border-1) solid var(--cl-border);
        border-radius: var(--size-1);
        font-size: var(--fs-sm);
    }

    &__link {
        &:hover {
            text-decoration: none;
        }
    }

    &__card {
        @include m.shadow;
        background-color: var(--bg-card);
        border: var(--border-1) solid var(--cl-border);
        width: 100%;
        border-radius: var(--size-1);
        display: block;
        padding: var(--size-2);
        margin-top: var(--size-2);
        margin-bottom: var(--size-2);
        font-size: var(--fs-sm);

        i {
            font-size: var(--fs-2xl);
        }

        &:hover {
            background-color: var(--bg-card-hover)
        }
    }

    &__table-of-contents {
        @extend %tree-style-list;
        height: 45%;
        overflow-y: auto;
    }
}
```