Plotly.d3.csv('https://raw.githubusercontent.com/johnou/ploty-proto/master/netty-jmh-results-handshake.csv', function (rows) {

  var openSslRows = rows.filter(function (row) {
    return row['Param: sslProvider'] == 'OPENSSL';
  });

  var openSslTrace = {
    name: 'OPENSSL',
    type: 'bar',
    x: openSslRows.map(function (row) {
      return [row['Param: bufferType'], ' ', row['Param: cipher']].join('');
    }),
    y: openSslRows.map(function (row) {
      return row['Score'];
    })
  };

  var jdkRows = rows.filter(function (row) {
    return row['Param: sslProvider'] == 'JDK';
  });

  var jdkTrace = {
    name: 'JDK',
    type: 'bar',
    x: jdkRows.map(function (row) {
      return [row['Param: bufferType'], ' ', row['Param: cipher']].join('');
    }),
    y: jdkRows.map(function (row) {
      return row['Score'];
    })
  };

  var layout = {
    title: 'SslEngine handshake JMH benchmark',
    barmode: 'group',
    yaxis: {title: "Handshake throughput score ops/s"},
  };

  Plotly.plot(document.getElementById('handshake'), [openSslTrace, jdkTrace], layout, {showLink: false});
});

Plotly.d3.csv('https://raw.githubusercontent.com/johnou/ploty-proto/master/netty-jmh-results-wrap.csv', function (rows) {

  var openSslRows = rows.filter(function (row) {
    return row['Param: sslProvider'] == 'OPENSSL';
  });

  var openSslTrace = {
    name: 'OPENSSL',
    type: 'bar',
    x: openSslRows.map(function (row) {
      return [row['Param: bufferType'], ' ', row['Param: messageSize'], ' ', row['Param: cipher']].join('');
    }),
    y: openSslRows.map(function (row) {
      return row['Score'];
    })
  };

  var jdkRows = rows.filter(function (row) {
    return row['Param: sslProvider'] == 'JDK';
  });

  var jdkTrace = {
    name: 'JDK',
    type: 'bar',
    x: jdkRows.map(function (row) {
      return [row['Param: bufferType'], ' ', row['Param: messageSize'], ' ', row['Param: cipher']].join('');
    }),
    y: jdkRows.map(function (row) {
      return row['Score'];
    })
  };

  var layout = {
    title: 'SslEngine wrap JMH benchmark',
    barmode: 'group',
    yaxis: {title: "Wrap throughput score ops/s"},
  };

  Plotly.plot(document.getElementById('wrap'), [openSslTrace, jdkTrace], layout, {showLink: false});
});

Plotly.d3.csv('https://raw.githubusercontent.com/johnou/ploty-proto/master/netty-jmh-results-unwrap.csv', function (rows) {

  var openSslRows = rows.filter(function (row) {
    return row['Param: sslProvider'] == 'OPENSSL';
  });

  var openSslTrace = {
    name: 'OPENSSL',
    type: 'bar',
    x: openSslRows.map(function (row) {
      return [row['Param: bufferType'], ' ', row['Param: messageSize'], ' ', row['Param: cipher']].join('');
    }),
    y: openSslRows.map(function (row) {
      return row['Score'];
    })
  };

  var jdkRows = rows.filter(function (row) {
    return row['Param: sslProvider'] == 'JDK';
  });

  var jdkTrace = {
    name: 'JDK',
    type: 'bar',
    x: jdkRows.map(function (row) {
      return [row['Param: bufferType'], ' ', row['Param: messageSize'], ' ', row['Param: cipher']].join('');
    }),
    y: jdkRows.map(function (row) {
      return row['Score'];
    })
  };

  var layout = {
    title: 'SslEngine unwrap JMH benchmark',
    barmode: 'group',
    yaxis: {title: "Unwrap throughput score ops/s"},
  };

  Plotly.plot(document.getElementById('unwrap'), [openSslTrace, jdkTrace], layout, {showLink: false});
});
