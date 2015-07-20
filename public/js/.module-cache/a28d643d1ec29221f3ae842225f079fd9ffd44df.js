var GathererCounter = React.createClass({displayName: "GathererCounter",
  render: function () {
    return (React.createElement("div", {className: "panel panel-primary"}, 
            React.createElement("div", {className: "panel-heading"}, 
              React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-xs-3"}, 
                  React.createElement("i", {className: "fa fa-users fa-5x"})
                ), 
                React.createElement("div", {className: "col-xs-9 text-right"}, 
                  React.createElement("div", {className: "huge", id: "gather-counter"}, 
                    this.state.count
                  ), 
                  React.createElement("div", null, "Gatherers Online")
                )
              )
            )
          ));
  }
});

React.render(React.createElement(GathererCounter, null), document.getElementById('gatherCounter'));