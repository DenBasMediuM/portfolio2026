<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ExportPortfolioData extends Command
{
    protected $signature = 'portfolio:export {--output= : Output path for portfolio.json}';

    protected $description = 'Export portfolio config to JSON for static build (e.g. GitHub Pages)';

    public function handle(): int
    {
        $data = [
            'profile' => config('portfolio.profile'),
            'works' => config('portfolio.works'),
        ];

        $output = $this->option('output') ?? base_path('storage/app/portfolio.json');

        $dir = dirname($output);
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }

        file_put_contents($output, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

        $this->info("Exported to: {$output}");

        return self::SUCCESS;
    }
}
