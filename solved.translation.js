const translations = {
    'id': {
        // Header dan Navigasi
        'solvedReports': 'Laporan Terselesaikan',
        'searchPlaceholder': 'Cari laporan terselesaikan...',
        'dashboard': 'Dashboard',
        'reports': 'Laporan',
        'settings': 'Pengaturan',
        'logout': 'Keluar',
        
        // Filter Panel
        'filterTitle': 'Filter Laporan Terselesaikan',
        'resetFilters': 'Reset Filter',
        'brandLabel': 'Brand',
        'allBrands': 'Semua Brand',
        'statusLabel': 'Status',
        'allStatuses': 'Semua Status',
        'completed': 'Selesai',
        'reopened': 'Dibuka Kembali',
        'dateRangeLabel': 'Rentang Tanggal',
        'categoryLabel': 'Kategori',
        'allCategories': 'Semua Kategori',
        
        // Table Headers
        'reportId': 'ID Laporan',
        'brand': 'Brand',
        'reportedBy': 'Dilaporkan Oleh',
        'title': 'Judul',
        'category': 'Kategori',
        'reportedAt': 'Dilaporkan Pada',
        'resolvedAt': 'Diselesaikan Pada',
        'status': 'Status',
        'actions': 'Aksi',
        
        // Status Badges
        'statusCompleted': 'Selesai',
        'statusReopened': 'Dibuka Kembali',
        'statusPending': 'Menunggu',
        
        // Action Buttons
        'viewDetails': 'Lihat Detail',
        'deleteReport': 'Hapus Laporan',
        'reopenReport': 'Buka Kembali Laporan',
        
        // Empty States
        'noReportsFound': 'Tidak Ada Laporan Ditemukan',
        'noReportsDescription': 'Tidak ada laporan terselesaikan dalam database.',
        'noDataAvailable': 'Tidak Ada Data Tersedia',
        'noDataDescription': 'Tidak ada laporan terselesaikan untuk ditampilkan dalam grafik.',
        
        // Modal - Report Details
        'reportDetails': 'Detail Laporan',
        'close': 'Tutup',
        'confirmReopen': 'Konfirmasi Buka Kembali',
        'reopenConfirmMessage': 'Apakah Anda yakin ingin membuka kembali laporan ini? Ini akan memindahkannya kembali ke laporan yang menunggu.',
        'cancel': 'Batal',
        'yesReopen': 'Ya, Buka Kembali Laporan',
        
        // Report Details Content
        'resolutionTime': 'Waktu Penyelesaian',
        'completedBy': 'Diselesaikan Oleh',
        'issueDescription': 'Deskripsi Masalah',
        'resolutionNotes': 'Catatan Penyelesaian',
        'noDescription': 'Tidak ada deskripsi yang diberikan',
        'noResolution': 'Tidak ada catatan penyelesaian yang diberikan',
        
        // Delete Confirmation
        'deleteReportTitle': 'Hapus Laporan',
        'deleteConfirmMessage': 'Apakah Anda yakin ingin menghapus laporan',
        'deleteCannotUndone': 'Tindakan ini tidak dapat dibatalkan.',
        'confirmDelete': 'Hapus Laporan',
        
        // Statistics and Charts
        'reportsCount': 'Jumlah Laporan',
        'thisWeek': 'Minggu Ini',
        'thisMonth': 'Bulan Ini',
        'avgResolutionTime': 'Rata-rata Waktu Penyelesaian',
        'brandDistribution': 'Distribusi Brand',
        'resolutionTimeDistribution': 'Distribusi Waktu Penyelesaian',
        'under1h': 'Kurang dari 1 jam',
        '1to4h': '1-4 jam',
        '4to12h': '4-12 jam',
        '12to24h': '12-24 jam',
        'over24h': 'Lebih dari 24 jam',
        
        // Pagination
        'previous': 'Sebelumnya',
        'next': 'Selanjutnya',
        'page': 'Halaman',
        'of': 'dari',
        
        // Notifications
        'reportDeleted': 'Laporan berhasil dihapus',
        'reportReopened': 'Laporan berhasil dibuka kembali',
        'errorLoading': 'Error memuat laporan',
        'reportNotFound': 'Laporan tidak ditemukan',
        'accessDenied': 'Akses ditolak: Hanya super admin yang dapat melakukan tindakan ini',
        'errorDeleting': 'Error menghapus laporan',
        'errorReopening': 'Error membuka kembali laporan'
    },
    
    'en': {
        // Header dan Navigasi
        'solvedReports': 'Solved Reports',
        'searchPlaceholder': 'Search solved reports...',
        'dashboard': 'Dashboard',
        'reports': 'Reports',
        'settings': 'Settings',
        'logout': 'Logout',
        
        // Filter Panel
        'filterTitle': 'Filter Solved Reports',
        'resetFilters': 'Reset Filters',
        'brandLabel': 'Brand',
        'allBrands': 'All Brands',
        'statusLabel': 'Status',
        'allStatuses': 'All Statuses',
        'completed': 'Completed',
        'reopened': 'Reopened',
        'dateRangeLabel': 'Date Range',
        'categoryLabel': 'Category',
        'allCategories': 'All Categories',
        
        // Table Headers
        'reportId': 'Report ID',
        'brand': 'Brand',
        'reportedBy': 'Reported By',
        'title': 'Title',
        'category': 'Category',
        'reportedAt': 'Reported At',
        'resolvedAt': 'Resolved At',
        'status': 'Status',
        'actions': 'Actions',
        
        // Status Badges
        'statusCompleted': 'Completed',
        'statusReopened': 'Reopened',
        'statusPending': 'Pending',
        
        // Action Buttons
        'viewDetails': 'View Details',
        'deleteReport': 'Delete Report',
        'reopenReport': 'Reopen Report',
        
        // Empty States
        'noReportsFound': 'No Solved Reports Found',
        'noReportsDescription': 'There are no completed reports in the database yet.',
        'noDataAvailable': 'No Data Available',
        'noDataDescription': 'There are no solved reports to display in the chart.',
        
        // Modal - Report Details
        'reportDetails': 'Report Details',
        'close': 'Close',
        'confirmReopen': 'Confirm Reopen',
        'reopenConfirmMessage': 'Are you sure you want to reopen this report? This will move it back to pending reports.',
        'cancel': 'Cancel',
        'yesReopen': 'Yes, Reopen Report',
        
        // Report Details Content
        'resolutionTime': 'Resolution Time',
        'completedBy': 'Completed By',
        'issueDescription': 'Issue Description',
        'resolutionNotes': 'Resolution Notes',
        'noDescription': 'No description provided',
        'noResolution': 'No resolution notes provided',
        
        // Delete Confirmation
        'deleteReportTitle': 'Delete Report',
        'deleteConfirmMessage': 'Are you sure you want to delete report',
        'deleteCannotUndone': 'This action cannot be undone.',
        'confirmDelete': 'Delete Report',
        
        // Statistics and Charts
        'reportsCount': 'Reports Count',
        'thisWeek': 'This Week',
        'thisMonth': 'This Month',
        'avgResolutionTime': 'Average Resolution Time',
        'brandDistribution': 'Brand Distribution',
        'resolutionTimeDistribution': 'Resolution Time Distribution',
        'under1h': 'Under 1h',
        '1to4h': '1-4h',
        '4to12h': '4-12h',
        '12to24h': '12-24h',
        'over24h': 'Over 24h',
        
        // Pagination
        'previous': 'Previous',
        'next': 'Next',
        'page': 'Page',
        'of': 'of',
        
        // Notifications
        'reportDeleted': 'Report deleted successfully',
        'reportReopened': 'Report reopened successfully',
        'errorLoading': 'Error loading solved reports',
        'reportNotFound': 'Report not found',
        'accessDenied': 'Access denied: Only super admin can perform this action',
        'errorDeleting': 'Error deleting report',
        'errorReopening': 'Error reopening report'
    },
    
    'ja': {
        // Header dan Navigasi
        'solvedReports': '解決済みレポート',
        'searchPlaceholder': '解決済みレポートを検索...',
        'dashboard': 'ダッシュボード',
        'reports': 'レポート',
        'settings': '設定',
        'logout': 'ログアウト',
        
        // Filter Panel
        'filterTitle': '解決済みレポートのフィルター',
        'resetFilters': 'フィルターをリセット',
        'brandLabel': 'ブランド',
        'allBrands': 'すべてのブランド',
        'statusLabel': 'ステータス',
        'allStatuses': 'すべてのステータス',
        'completed': '完了',
        'reopened': '再開',
        'dateRangeLabel': '日付範囲',
        'categoryLabel': 'カテゴリ',
        'allCategories': 'すべてのカテゴリ',
        
        // Table Headers
        'reportId': 'レポートID',
        'brand': 'ブランド',
        'reportedBy': '報告者',
        'title': 'タイトル',
        'category': 'カテゴリ',
        'reportedAt': '報告日時',
        'resolvedAt': '解決日時',
        'status': 'ステータス',
        'actions': '操作',
        
        // Status Badges
        'statusCompleted': '完了',
        'statusReopened': '再開',
        'statusPending': '保留中',
        
        // Action Buttons
        'viewDetails': '詳細を表示',
        'deleteReport': 'レポートを削除',
        'reopenReport': 'レポートを再開',
        
        // Empty States
        'noReportsFound': '解決済みレポートが見つかりません',
        'noReportsDescription': 'データベースに完了したレポートはまだありません。',
        'noDataAvailable': 'データがありません',
        'noDataDescription': 'グラフに表示する解決済みレポートがありません。',
        
        // Modal - Report Details
        'reportDetails': 'レポートの詳細',
        'close': '閉じる',
        'confirmReopen': '再開の確認',
        'reopenConfirmMessage': 'このレポートを再開してもよろしいですか？これは保留中のレポートに戻されます。',
        'cancel': 'キャンセル',
        'yesReopen': 'はい、レポートを再開します',
        
        // Report Details Content
        'resolutionTime': '解決時間',
        'completedBy': '完了者',
        'issueDescription': '問題の説明',
        'resolutionNotes': '解決メモ',
        'noDescription': '説明が提供されていません',
        'noResolution': '解決メモが提供されていません',
        
        // Delete Confirmation
        'deleteReportTitle': 'レポートの削除',
        'deleteConfirmMessage': 'このレポートを削除してもよろしいですか',
        'deleteCannotUndone': 'この操作は元に戻せません。',
        'confirmDelete': 'レポートを削除',
        
        // Statistics and Charts
        'reportsCount': 'レポート数',
        'thisWeek': '今週',
        'thisMonth': '今月',
        'avgResolutionTime': '平均解決時間',
        'brandDistribution': 'ブランド分布',
        'resolutionTimeDistribution': '解決時間分布',
        'under1h': '1時間未満',
        '1to4h': '1-4時間',
        '4to12h': '4-12時間',
        '12to24h': '12-24時間',
        'over24h': '24時間以上',
        
        // Pagination
        'previous': '前へ',
        'next': '次へ',
        'page': 'ページ',
        'of': '/',
        
        // Notifications
        'reportDeleted': 'レポートが正常に削除されました',
        'reportReopened': 'レポートが正常に再開されました',
        'errorLoading': '解決済みレポートの読み込みエラー',
        'reportNotFound': 'レポートが見つかりません',
        'accessDenied': 'アクセス拒否：この操作はスーパー管理者のみが実行できます',
        'errorDeleting': 'レポートの削除エラー',
        'errorReopening': 'レポートの再開エラー'
    },
 'id': {
        // Header dan Navigasi
        'completedMaintenance': 'Maintenance Terselesaikan',
        'searchPlaceholder': 'Cari tugas terselesaikan...',
        'dashboard': 'Dashboard',
        'maintenance': 'Maintenance',
        'settings': 'Pengaturan',
        'logout': 'Keluar',
        
        // Statistik Cards
        'totalCompleted': 'Total Terselesaikan',
        'completedThisWeek': 'Selesai Minggu Ini',
        'completedThisMonth': 'Selesai Bulan Ini',
        'averageCompletionTime': 'Rata-rata Waktu Penyelesaian',
        'tasksCompletedToDate': 'Tugas selesai hingga saat ini',
        'tasksCompletedThisWeek': 'Tugas selesai minggu ini',
        'tasksCompletedThisMonth': 'Tugas selesai bulan ini',
        'averageDaysToComplete': 'Rata-rata hari untuk menyelesaikan',
        
        // Chart Section
        'completionTrends': 'Tren Penyelesaian',
        'tasksByCategory': 'Tugas Berdasarkan Kategori',
        'monthlyCompletionRate': 'Tingkat Penyelesaian Bulanan',
        'last7Days': '7 Hari Terakhir',
        'last30Days': '30 Hari Terakhir',
        'last90Days': '90 Hari Terakhir',
        'allTime': 'Semua Waktu',
        'thisMonth': 'Bulan Ini',
        'thisWeek': 'Minggu Ini',
        'last6Months': '6 Bulan Terakhir',
        'last12Months': '12 Bulan Terakhir',
        
        // Filter Section
        'categoryLabel': 'Kategori',
        'allCategories': 'Semua Kategori',
        'server': 'Server Maintenance',
        'database': 'Database',
        'completionTime': 'Waktu Penyelesaian',
        'allTime': 'Semua Waktu',
        'today': 'Hari Ini',
        'week': 'Minggu Ini',
        'month': 'Bulan Ini',
        'quarter': 'Kuartal Ini',
        'sortBy': 'Urutkan Berdasarkan',
        'newestFirst': 'Terbaru Dahulu',
        'oldestFirst': 'Terlama Dahulu',
        'category': 'Kategori',
        
        // Action Buttons
        'refresh': 'Refresh',
        'viewPendingTasks': 'Lihat Tugas Tertunda',
        'viewDetails': 'Lihat Detail',
        'exportTaskDetails': 'Ekspor Detail Tugas',
        'close': 'Tutup',
        
        // Table Headers
        'taskId': 'ID Tugas',
        'title': 'Judul',
        'category': 'Kategori',
        'completedDate': 'Tanggal Selesai',
        'completionTime': 'Waktu Penyelesaian',
        'assignedTo': 'Ditugaskan Ke',
        'actions': 'Aksi',
        
        // Modal - Task Details
        'taskDetails': 'Detail Tugas',
        'priority': 'Prioritas',
        'dueDate': 'Tanggal Jatuh Tempo',
        'createdDate': 'Tanggal Dibuat',
        'description': 'Deskripsi',
        'notes': 'Catatan',
        'timeTracking': 'Pelacakan Waktu',
        'estimatedTime': 'Perkiraan Waktu',
        'actualTime': 'Waktu Aktual',
        'efficiency': 'Efisiensi',
        'faster': 'lebih cepat',
        'slower': 'lebih lambat',
        
        // Empty States
        'noCompletedTasks': 'Tidak Ada Tugas Terselesaikan',
        'noCompletedTasksDescription': 'Anda belum menyelesaikan tugas maintenance apapun.',
        'noTasksFound': 'Tidak Ada Tugas Ditemukan',
        'noTasksDescription': 'Coba sesuaikan filter Anda atau periksa kembali nanti.',
        
        // Pagination
        'previous': 'Sebelumnya',
        'next': 'Selanjutnya',
        'page': 'Halaman',
        'of': 'dari',
        'tasks': 'tugas',
        
        // Notifications
        'refreshingData': 'Memperbarui data...',
        'taskDetailsNotFound': 'Detail tugas tidak ditemukan',
        'errorLoadingData': 'Error memuat data maintenance',
        'reportGenerated': 'Laporan berhasil dibuat',
        'errorGeneratingReport': 'Error membuat laporan'
    },
    
    'en': {
        // Header dan Navigasi
        'completedMaintenance': 'Completed Maintenance',
        'searchPlaceholder': 'Search completed tasks...',
        'dashboard': 'Dashboard',
        'maintenance': 'Maintenance',
        'settings': 'Settings',
        'logout': 'Logout',
        
        // Statistik Cards
        'totalCompleted': 'Total Completed',
        'completedThisWeek': 'Completed This Week',
        'completedThisMonth': 'Completed This Month',
        'averageCompletionTime': 'Average Completion Time',
        'tasksCompletedToDate': 'Tasks completed to date',
        'tasksCompletedThisWeek': 'Tasks completed this week',
        'tasksCompletedThisMonth': 'Tasks completed this month',
        'averageDaysToComplete': 'Average days to complete',
        
        // Chart Section
        'completionTrends': 'Completion Trends',
        'tasksByCategory': 'Tasks by Category',
        'monthlyCompletionRate': 'Monthly Completion Rate',
        'last7Days': 'Last 7 Days',
        'last30Days': 'Last 30 Days',
        'last90Days': 'Last 90 Days',
        'allTime': 'All Time',
        'thisMonth': 'This Month',
        'thisWeek': 'This Week',
        'last6Months': 'Last 6 Months',
        'last12Months': 'Last 12 Months',
        
        // Filter Section
        'categoryLabel': 'Category',
        'allCategories': 'All Categories',
        'server': 'Server Maintenance',
        'database': 'Database',
        'completionTime': 'Completion Time',
        'allTime': 'All Time',
        'today': 'Today',
        'week': 'This Week',
        'month': 'This Month',
        'quarter': 'This Quarter',
        'sortBy': 'Sort By',
        'newestFirst': 'Newest First',
        'oldestFirst': 'Oldest First',
        'category': 'Category',
        
        // Action Buttons
        'refresh': 'Refresh',
        'viewPendingTasks': 'View Pending Tasks',
        'viewDetails': 'View Details',
        'exportTaskDetails': 'Export Task Details',
        'close': 'Close',
        
        // Table Headers
        'taskId': 'Task ID',
        'title': 'Title',
        'category': 'Category',
        'completedDate': 'Completed Date',
        'completionTime': 'Completion Time',
        'assignedTo': 'Assigned To',
        'actions': 'Actions',
        
        // Modal - Task Details
        'taskDetails': 'Task Details',
        'priority': 'Priority',
        'dueDate': 'Due Date',
        'createdDate': 'Created Date',
        'description': 'Description',
        'notes': 'Notes',
        'timeTracking': 'Time Tracking',
        'estimatedTime': 'Estimated Time',
        'actualTime': 'Actual Time',
        'efficiency': 'Efficiency',
        'faster': 'faster',
        'slower': 'slower',
        
        // Empty States
        'noCompletedTasks': 'No Completed Tasks',
        'noCompletedTasksDescription': 'You haven\'t completed any maintenance tasks yet.',
        'noTasksFound': 'No Tasks Found',
        'noTasksDescription': 'Try adjusting your filters or check back later.',
        
        // Pagination
        'previous': 'Previous',
        'next': 'Next',
        'page': 'Page',
        'of': 'of',
        'tasks': 'tasks',
        
        // Notifications
        'refreshingData': 'Refreshing data...',
        'taskDetailsNotFound': 'Task details not found',
        'errorLoadingData': 'Error loading maintenance data',
        'reportGenerated': 'Report generated successfully',
        'errorGeneratingReport': 'Error generating report'
    },
    
    'ja': {
        // Header dan Navigasi
        'completedMaintenance': '完了済みメンテナンス',
        'searchPlaceholder': '完了したタスクを検索...',
        'dashboard': 'ダッシュボード',
        'maintenance': 'メンテナンス',
        'settings': '設定',
        'logout': 'ログアウト',
        
        // Statistik Cards
        'totalCompleted': '合計完了数',
        'completedThisWeek': '今週完了',
        'completedThisMonth': '今月完了',
        'averageCompletionTime': '平均完了時間',
        'tasksCompletedToDate': '現在までの完了タスク',
        'tasksCompletedThisWeek': '今週完了したタスク',
        'tasksCompletedThisMonth': '今月完了したタスク',
        'averageDaysToComplete': '完了までの平均日数',
        
        // Chart Section
        'completionTrends': '完了トレンド',
        'tasksByCategory': 'カテゴリ別タスク',
        'monthlyCompletionRate': '月間完了率',
        'last7Days': '過去7日間',
        'last30Days': '過去30日間',
        'last90Days': '過去90日間',
        'allTime': '全期間',
        'thisMonth': '今月',
        'thisWeek': '今週',
        'last6Months': '過去6ヶ月',
        'last12Months': '過去12ヶ月',
        
        // Filter Section
        'categoryLabel': 'カテゴリ',
        'allCategories': 'すべてのカテゴリ',
        'server': 'サーバーメンテナンス',
        'database': 'データベース',
        'completionTime': '完了時間',
        'allTime': '全期間',
        'today': '今日',
        'week': '今週',
        'month': '今月',
        'quarter': '今四半期',
        'sortBy': '並び替え',
        'newestFirst': '新しい順',
        'oldestFirst': '古い順',
        'category': 'カテゴリ',
        
        // Action Buttons
        'refresh': '更新',
        'viewPendingTasks': '保留中のタスクを表示',
        'viewDetails': '詳細を表示',
        'exportTaskDetails': 'タスク詳細をエクスポート',
        'close': '閉じる',
        
        // Table Headers
        'taskId': 'タスクID',
        'title': 'タイトル',
        'category': 'カテゴリ',
        'completedDate': '完了日',
        'completionTime': '完了時間',
        'assignedTo': '担当者',
        'actions': '操作',
        
        // Modal - Task Details
        'taskDetails': 'タスク詳細',
        'priority': '優先度',
        'dueDate': '期限日',
        'createdDate': '作成日',
        'description': '説明',
        'notes': 'メモ',
        'timeTracking': '時間追跡',
        'estimatedTime': '推定時間',
        'actualTime': '実際の時間',
        'efficiency': '効率',
        'faster': '速い',
        'slower': '遅い',
        
        // Empty States
        'noCompletedTasks': '完了したタスクがありません',
        'noCompletedTasksDescription': 'まだメンテナンスタスクを完了していません。',
        'noTasksFound': 'タスクが見つかりません',
        'noTasksDescription': 'フィルターを調整するか、後でもう一度確認してください。',
        
        // Pagination
        'previous': '前へ',
        'next': '次へ',
        'page': 'ページ',
        'of': '/',
        'tasks': 'タスク',
        
        // Notifications
        'refreshingData': 'データを更新中...',
        'taskDetailsNotFound': 'タスクの詳細が見つかりません',
        'errorLoadingData': 'メンテナンスデータの読み込みエラー',
        'reportGenerated': 'レポートが正常に作成されました',
        'errorGeneratingReport': 'レポート作成エラー'
    },
    'zh': {
        // Header dan Navigasi
        'solvedReports': '已解决报告',
        'searchPlaceholder': '搜索已解决报告...',
        'dashboard': '仪表板',
        'reports': '报告',
        'settings': '设置',
        'logout': '登出',
        
        // Filter Panel
        'filterTitle': '筛选已解决报告',
        'resetFilters': '重置筛选',
        'brandLabel': '品牌',
        'allBrands': '所有品牌',
        'statusLabel': '状态',
        'allStatuses': '所有状态',
        'completed': '已完成',
        'reopened': '已重新开启',
        'dateRangeLabel': '日期范围',
        'categoryLabel': '类别',
        'allCategories': '所有类别',
        
        // Table Headers
        'reportId': '报告ID',
        'brand': '品牌',
        'reportedBy': '报告人',
        'title': '标题',
        'category': '类别',
        'reportedAt': '报告时间',
        'resolvedAt': '解决时间',
        'status': '状态',
        'actions': '操作',
        
        // Status Badges
        'statusCompleted': '已完成',
        'statusReopened': '已重新开启',
        'statusPending': '待处理',
        
        // Action Buttons
        'viewDetails': '查看详情',
        'deleteReport': '删除报告',
        'reopenReport': '重新开启报告',
        
        // Empty States
        'noReportsFound': '未找到已解决报告',
        'noReportsDescription': '数据库中尚无已完成的报告。',
        'noDataAvailable': '无可用数据',
        'noDataDescription': '图表中没有可显示的已解决报告。',
        
        // Modal - Report Details
        'reportDetails': '报告详情',
        'close': '关闭',
        'confirmReopen': '确认重新开启',
        'reopenConfirmMessage': '您确定要重新开启此报告吗？这将把它移回待处理报告。',
        'cancel': '取消',
        'yesReopen': '是的，重新开启报告',
        
        // Report Details Content
        'resolutionTime': '解决时间',
        'completedBy': '解决人',
        'issueDescription': '问题描述',
        'resolutionNotes': '解决备注',
        'noDescription': '未提供描述',
        'noResolution': '未提供解决备注',
        
        // Delete Confirmation
        'deleteReportTitle': '删除报告',
        'deleteConfirmMessage': '您确定要删除报告',
        'deleteCannotUndone': '此操作无法撤销。',
        'confirmDelete': '删除报告',
        
        // Statistics and Charts
        'reportsCount': '报告数量',
        'thisWeek': '本周',
        'thisMonth': '本月',
        'avgResolutionTime': '平均解决时间',
        'brandDistribution': '品牌分布',
        'resolutionTimeDistribution': '解决时间分布',
        'under1h': '1小时内',
        '1to4h': '1-4小时',
        '4to12h': '4-12小时',
        '12to24h': '12-24小时',
        'over24h': '24小时以上',
        
        // Pagination
        'previous': '上一页',
        'next': '下一页',
        'page': '页',
        'of': '共',
        
        // Notifications
        'reportDeleted': '报告删除成功',
        'reportReopened': '报告重新开启成功',
        'errorLoading': '加载已解决报告时出错',
        'reportNotFound': '报告未找到',
        'accessDenied': '访问被拒绝：只有超级管理员可以执行此操作',
        'errorDeleting': '删除报告时出错',
        'errorReopening': '重新开启报告时出错'
    },
    
    // ... (bahasa lainnya tetap sama)
    
    'zh': {
        // Header dan Navigasi
        'completedMaintenance': '已完成维护',
        'searchPlaceholder': '搜索已完成任务...',
        'dashboard': '仪表板',
        'maintenance': '维护',
        'settings': '设置',
        'logout': '登出',
        
        // Statistik Cards
        'totalCompleted': '总完成数',
        'completedThisWeek': '本周完成',
        'completedThisMonth': '本月完成',
        'averageCompletionTime': '平均完成时间',
        'tasksCompletedToDate': '至今完成的任务',
        'tasksCompletedThisWeek': '本周完成的任务',
        'tasksCompletedThisMonth': '本月完成的任务',
        'averageDaysToComplete': '平均完成天数',
        
        // Chart Section
        'completionTrends': '完成趋势',
        'tasksByCategory': '按类别分类的任务',
        'monthlyCompletionRate': '月度完成率',
        'last7Days': '过去7天',
        'last30Days': '过去30天',
        'last90Days': '过去90天',
        'allTime': '所有时间',
        'thisMonth': '本月',
        'thisWeek': '本周',
        'last6Months': '过去6个月',
        'last12Months': '过去12个月',
        
        // Filter Section
        'categoryLabel': '类别',
        'allCategories': '所有类别',
        'server': '服务器维护',
        'database': '数据库',
        'completionTime': '完成时间',
        'allTime': '所有时间',
        'today': '今天',
        'week': '本周',
        'month': '本月',
        'quarter': '本季度',
        'sortBy': '排序方式',
        'newestFirst': '最新优先',
        'oldestFirst': '最旧优先',
        'category': '类别',
        
        // Action Buttons
        'refresh': '刷新',
        'viewPendingTasks': '查看待处理任务',
        'viewDetails': '查看详情',
        'exportTaskDetails': '导出任务详情',
        'close': '关闭',
        
        // Table Headers
        'taskId': '任务ID',
        'title': '标题',
        'category': '类别',
        'completedDate': '完成日期',
        'completionTime': '完成时间',
        'assignedTo': '分配给',
        'actions': '操作',
        
        // Modal - Task Details
        'taskDetails': '任务详情',
        'priority': '优先级',
        'dueDate': '截止日期',
        'createdDate': '创建日期',
        'description': '描述',
        'notes': '备注',
        'timeTracking': '时间跟踪',
        'estimatedTime': '预计时间',
        'actualTime': '实际时间',
        'efficiency': '效率',
        'faster': '更快',
        'slower': '更慢',
        
        // Empty States
        'noCompletedTasks': '无已完成任务',
        'noCompletedTasksDescription': '您尚未完成任何维护任务。',
        'noTasksFound': '未找到任务',
        'noTasksDescription': '请尝试调整筛选条件或稍后检查。',
        
        // Pagination
        'previous': '上一页',
        'next': '下一页',
        'page': '页',
        'of': '共',
        'tasks': '任务',
        
        // Notifications
        'refreshingData': '正在刷新数据...',
        'taskDetailsNotFound': '未找到任务详情',
        'errorLoadingData': '加载维护数据时出错',
        'reportGenerated': '报告生成成功',
        'errorGeneratingReport': '生成报告时出错'
    }
};
