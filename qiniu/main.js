$.ajax({
  method: "post",
  url: "http://127.0.0.1:3001/APP/v1/qiniu/token/apk", success: function (res) {
    var token = res.data.qiniu.uptoken;
    var domain = res.data.qiniu.domain;
    region = res.data.qiniu.region
    qnname = res.data.qiniu.qname

    if (region == "storage.ZoneHuadong") {
      useregion = qiniu.region.z0
    }
    if (region == "storage.ZoneHuabei") {
      useregion = qiniu.region.z1
    }
    if (region == "storage.ZoneHuanan") {
      useregion = qiniu.region.z2
    }
    if (region == "storage.ZoneBeimei") {
      useregion = qiniu.region.na0
    }
    /*qiniu.region.z0: 代表华东区域
    qiniu.region.z1: 代表华北区域
    qiniu.region.z2: 代表华南区域
    qiniu.region.na0: 代表北美区域
    qiniu.region.as0: 代表东南亚区域 */

    var config = {
      useCdnDomain: false,
      disableStatisticsReport: false,
      retryCount: 6,
      region: useregion
    };
    var putExtra = {
      fname: qnname,
      params: {},
      mimeType: null
    };
    $(".nav-box")
      .find("a")
      .each(function (index) {
        $(this).on("click", function (e) {

          uploadWithSDK(token, putExtra, config, domain);

        });
      });

    uploadWithSDK(token, putExtra, config, domain);
  }
})
