<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('portfolio.profile.name', 'Portfolio') }} — {{ config('portfolio.profile.title') }}</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=space-grotesk:400,500,600,700|jetbrains-mono:400,500" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @php
        $portfolioData = [
            'profile' => config('portfolio.profile'),
            'works' => config('portfolio.works'),
            'certificates' => config('portfolio.certificates'),
        ];
    @endphp
    <script>
        window.__PORTFOLIO__ = @json($portfolioData);
    </script>
</head>
<body class="antialiased bg-zinc-950 text-zinc-100 min-h-screen">
    <div id="app"></div>
</body>
</html>
