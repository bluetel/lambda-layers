"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const https_1 = __importDefault(require("https"));
const http_1 = __importDefault(require("http"));
const request = async (url, options, method, body) => {
    const formattedUrl = new URL(url);
    const moduleToUse = formattedUrl.protocol === 'http:' ? http_1.default : https_1.default;
    const requestOptions = {
        hostname: formattedUrl.hostname,
        port: formattedUrl.port,
        path: formattedUrl.pathname,
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    };
    return new Promise((resolve, reject) => {
        const request = moduleToUse.request(requestOptions, (response) => {
            let returnData = '';
            response.on('data', (chunk) => {
                returnData += chunk;
            });
            response.on('end', () => {
                try {
                    const parsedJson = JSON.parse(returnData);
                    resolve(parsedJson);
                }
                catch (err) {
                    reject(err);
                }
            });
        });
        request.on('error', (err) => {
            reject(err);
        });
        if (body && method === 'POST') {
            request.write(JSON.stringify(body));
        }
        request.end();
    });
};
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9qc29uLWxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUF5QjtBQUN6QixnREFBdUI7QUFFaEIsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUMxQixHQUFXLEVBQ1gsT0FBOEIsRUFDOUIsTUFBMEMsRUFDMUMsSUFBVSxFQUN1QixFQUFFO0lBQ25DLE1BQU0sWUFBWSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRWpDLE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFJLENBQUMsQ0FBQyxDQUFDLGVBQUssQ0FBQTtJQUVwRSxNQUFNLGNBQWMsR0FBeUI7UUFDM0MsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1FBQy9CLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtRQUN2QixJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7UUFDM0IsR0FBRyxPQUFPO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxHQUFHLE9BQU8sRUFBRSxPQUFPO1NBQ3BCO0tBQ0YsQ0FBQTtJQUVELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDckMsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMvRCxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7WUFFbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDNUIsVUFBVSxJQUFJLEtBQUssQ0FBQTtZQUNyQixDQUFDLENBQUMsQ0FBQTtZQUVGLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtnQkFDdEIsSUFBSTtvQkFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUN6QyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQ3BCO2dCQUFDLE9BQU8sR0FBRyxFQUFFO29CQUNaLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtpQkFDWjtZQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxJQUFJLElBQUksTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtTQUNwQztRQUVELE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNmLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBakRZLFFBQUEsT0FBTyxXQWlEbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IGFzeW5jIChcbiAgdXJsOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBodHRwcy5SZXF1ZXN0T3B0aW9ucyxcbiAgbWV0aG9kPzogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnLFxuICBib2R5PzogYW55XG4pOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0+IHtcbiAgY29uc3QgZm9ybWF0dGVkVXJsID0gbmV3IFVSTCh1cmwpXG5cbiAgY29uc3QgbW9kdWxlVG9Vc2UgPSBmb3JtYXR0ZWRVcmwucHJvdG9jb2wgPT09ICdodHRwOicgPyBodHRwIDogaHR0cHNcblxuICBjb25zdCByZXF1ZXN0T3B0aW9uczogaHR0cHMuUmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgaG9zdG5hbWU6IGZvcm1hdHRlZFVybC5ob3N0bmFtZSxcbiAgICBwb3J0OiBmb3JtYXR0ZWRVcmwucG9ydCxcbiAgICBwYXRoOiBmb3JtYXR0ZWRVcmwucGF0aG5hbWUsXG4gICAgLi4ub3B0aW9ucyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4ub3B0aW9ucz8uaGVhZGVycyxcbiAgICB9LFxuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gbW9kdWxlVG9Vc2UucmVxdWVzdChyZXF1ZXN0T3B0aW9ucywgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBsZXQgcmV0dXJuRGF0YSA9ICcnXG5cbiAgICAgIHJlc3BvbnNlLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICAgIHJldHVybkRhdGEgKz0gY2h1bmtcbiAgICAgIH0pXG5cbiAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSnNvbiA9IEpTT04ucGFyc2UocmV0dXJuRGF0YSlcbiAgICAgICAgICByZXNvbHZlKHBhcnNlZEpzb24pXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJlcXVlc3Qub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgcmVqZWN0KGVycilcbiAgICB9KVxuXG4gICAgaWYgKGJvZHkgJiYgbWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIHJlcXVlc3Qud3JpdGUoSlNPTi5zdHJpbmdpZnkoYm9keSkpXG4gICAgfVxuXG4gICAgcmVxdWVzdC5lbmQoKVxuICB9KVxufVxuIl19