"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const request = async (url, headers, method, body) => {
    const config = {
        method: method ?? 'POST',
        url,
        headers: {
            'Content-Type': 'application/json',
            ...(headers ?? {}),
        },
        data: method === 'POST' && body ? body : undefined,
    };
    console.log('temp');
    const response = await (0, axios_1.default)(config);
    return response.data;
};
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLWxheWVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYW1iZGEtbGF5ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUFpRDtBQUUxQyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQzFCLEdBQVcsRUFDWCxPQUFtQyxFQUNuQyxNQUEwQyxFQUMxQyxJQUFVLEVBQ3VCLEVBQUU7SUFDbkMsTUFBTSxNQUFNLEdBQXVCO1FBQ2pDLE1BQU0sRUFBRSxNQUFNLElBQUksTUFBTTtRQUN4QixHQUFHO1FBQ0gsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksRUFBRSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ25ELENBQUE7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRW5CLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBQSxlQUFLLEVBQUMsTUFBTSxDQUFDLENBQUE7SUFDcEMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFBO0FBQ3RCLENBQUMsQ0FBQTtBQXBCWSxRQUFBLE9BQU8sV0FvQm5CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IGFzeW5jIChcbiAgdXJsOiBzdHJpbmcsXG4gIGhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LFxuICBtZXRob2Q/OiAnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ0RFTEVURScsXG4gIGJvZHk/OiBhbnlcbik6IFByb21pc2U8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPT4ge1xuICBjb25zdCBjb25maWc6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHtcbiAgICBtZXRob2Q6IG1ldGhvZCA/PyAnUE9TVCcsXG4gICAgdXJsLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAuLi4oaGVhZGVycyA/PyB7fSksXG4gICAgfSxcbiAgICBkYXRhOiBtZXRob2QgPT09ICdQT1NUJyAmJiBib2R5ID8gYm9keSA6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGNvbnNvbGUubG9nKCd0ZW1wJylcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKGNvbmZpZylcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cbiJdfQ==