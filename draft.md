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