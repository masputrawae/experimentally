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
