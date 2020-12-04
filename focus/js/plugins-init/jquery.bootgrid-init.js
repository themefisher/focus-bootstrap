$("#bootgrid-basic").bootgrid({
    selection: true,
    multiSelect: true,
    rowSelect: true,
    keepSelection: true
}).on("selected.rs.jquery.bootgrid", function(e, rows)
{
    var rowIds = [];
    for (var i = 0; i < rows.length; i++)
    {
        rowIds.push(rows[i].id);
    }
    alert("Select: " + rowIds.join(","));
}).on("deselected.rs.jquery.bootgrid", function(e, rows)
{
    var rowIds = [];
    for (var i = 0; i < rows.length; i++)
    {
        rowIds.push(rows[i].id);
    }
    alert("Deselect: " + rowIds.join(","));
});

// $("#bootgrid-data").bootgrid({
//     icon: "icon glyphicon",

//     iconColumns: "glyphicon-list",

//     iconDown: "glyphicon-triangle-bottom",

//     iconRefresh: "glyphicon-repeat",

//     iconSearch: "glyphicon-search"
// });