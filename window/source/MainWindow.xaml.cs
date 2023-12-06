using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.UI.Xaml.Controls.Primitives;
using Microsoft.UI.Xaml.Data;
using Microsoft.UI.Xaml.Input;
using Microsoft.UI.Xaml.Media;
using Microsoft.UI.Xaml.Navigation;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;

// To learn more about WinUI, the WinUI project structure,
// and more about our project templates, see: http://aka.ms/winui-project-info.

namespace webview
{
    public sealed partial class MainWindow : Window
    {
        public MainWindow()
        {
            AsyncContainer();
        }

        async void AsyncContainer()
        {
            Task nodeTask = NodeJS();
            InitializeComponent();

            // Wait for the NodeJS task to complete
            await nodeTask;
        }

        static async Task NodeJS()
        {
            string argument = "../../dev/server/src/main.js";

            ProcessStartInfo psi = new ProcessStartInfo();
            psi.FileName = "../../node/node.exe";
            psi.Arguments = argument;
            psi.WindowStyle = ProcessWindowStyle.Hidden;
            psi.CreateNoWindow = true;

            using (Process process = new Process { StartInfo = psi })
            {
                process.Start();
                await process.WaitForExitAsync();
            }
        }
    }
}
