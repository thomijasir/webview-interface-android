package com.example.webviewinterface

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.annotation.RequiresApi
import androidx.appcompat.app.AppCompatActivity
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewAssetLoader.AssetsPathHandler
import com.example.webviewinterface.helper.WebViewLocalServer


class MainActivity : AppCompatActivity() {


    lateinit var webElement: WebView

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", AssetsPathHandler(this))
            .build()

        var webServer = WebViewLocalServer(this)
        val hostDetail = webServer.hostAssets("www")
        val indexUrl = hostDetail.httpsPrefix.buildUpon().appendPath("index.html").build().toString()
        // Element Select
        webElement = findViewById<WebView>(R.id.web)

        // Create Client
        val createWebViewClient = object : WebViewClient(){
            // For KitKat and earlier.
            override fun shouldInterceptRequest(
                view: WebView?,
                url: String?
            ): WebResourceResponse? {
                return webServer.shouldInterceptRequest(url)
            }

            // For Lollipop and above.
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest?
            ): WebResourceResponse? {
                return webServer.shouldInterceptRequest(request)
            }
        }

        val createWebClient2 = object : WebViewClient(){
            @RequiresApi(21)
            override fun shouldInterceptRequest(
                view: WebView?,
                request: WebResourceRequest
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }

            @Suppress("deprecation") // for API < 21
            override fun shouldInterceptRequest(
                view: WebView?,
                url: String?
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(Uri.parse(url))
            }
        }
//        webElement.webViewClient = createWebViewClient
        webElement.webViewClient = createWebClient2
        //WebView Settings
//        webElement.settings.allowFileAccess = true
//        webElement.settings.allowContentAccess = true
//        webElement.webChromeClient = WebChromeClient()
        webElement.settings.javaScriptEnabled = true
        webElement.settings.builtInZoomControls = false
        webElement.settings.setSupportZoom(false)
        webElement.settings.setSupportMultipleWindows(false)

        // WebView Load Control
        println("HELLOW: ${indexUrl}")
        webElement.loadUrl("https://appassets.androidplatform.net/assets/www/index.html")
    }

    override fun onBackPressed() {
        Toast.makeText(this, "Cannot Back", Toast.LENGTH_SHORT).show()
    }

}