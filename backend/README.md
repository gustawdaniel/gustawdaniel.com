# fastify-app

Create task:

```
http POST https://api.gustawdaniel.com/api/email name=Daniel email=gustaw.daniel@gmail.com description="My awesome project"
```


Get teams

```
source .env
http https://api.clickup.com/api/v2/team Authorization:${CLICKUP_API_TOKEN} | jq '.teams[] | {id,name}'
```

Return:

```
{
  "id": "2153842",
  "name": "Precise Lab"
}
{
  "id": "2153843",
  "name": "Daniel Gustaw"
}
{
  "id": "2529517",
  "name": "Julian Chwalewski's Workspace"
}
```

---

Get spaces

```
http "https://api.clickup.com/api/v2/team/2153842/space?archived=false" Authorization:${CLICKUP_API_TOKEN} | jq '.spaces[] | {id,name}'
```

Into:

```
{
  "id": "2228601",
  "name": "Product"
}
{
  "id": "2233695",
  "name": "Marketing"
}
{
  "id": "4568214",
  "name": "Raporty"
}
{
  "id": "2670445",
  "name": "HR"
}
{
  "id": "2656783",
  "name": "Zarządzanie Operacyjne"
}
```

---

Get Folders:

```
http "https://api.clickup.com/api/v2/space/2233695/folder?archived=false" Authorization:${CLICKUP_API_TOKEN} | jq '.folders[] | {id, name}'
```

```
{
  "id": "8959564",
  "name": "Prospects"
}
{
  "id": "8924036",
  "name": "Web screenshots maker "
}
{
  "id": "8959506",
  "name": "Business Development"
}
{
  "id": "8959479",
  "name": "Blog"
}
{
  "id": "8962500",
  "name": "Branding"
}
```

Get list:

```
http "https://api.clickup.com/api/v2/folder/8959564/list?archived=false" Authorization:${CLICKUP_API_TOKEN} | jq '.lists[] | {id, name}'
```

```
{
  "id": "19409275",
  "name": "List"
}
```

Get tasks:

```
http "https://api.clickup.com/api/v2/list/19409275/task?archived=false" Authorization:${CLICKUP_API_TOKEN} | jq '.tasks[] | {id, name}'
```

New task:

```
echo '{"name": "Daniel", "description": "Email and text", "assignees": [ 2437459 ]}' | http POST "https://api.clickup.com/api/v2/list/19409275/task" Authorization:${CLICKUP_API_TOKEN}
```

API

```
http POST localhost:3000/api/email name=Daniel email=gustaw.daniel@gmail.com description="My awesome project"
```
